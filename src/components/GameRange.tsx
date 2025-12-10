import React, { useContext, useState, type ChangeEvent } from 'react'
import UserContext, { type UserContextType } from '../context/UserContext';

const GameRange = () => {
    
    const { selectedMinimumRangeValue, setSelectedMinimumRangeValue } = useContext(UserContext) as UserContextType;
    const [ isCustomRangeSelected, setIsCustomRangeSelected ] = useState<boolean>(false);

    const handleSelectedCustomRange = (e: ChangeEvent<HTMLInputElement>) => {
        setSelectedMinimumRangeValue(Number(e.target.value));
    }

    const handleMinimumRangeValue = (value: string | undefined) => {
        switch (value) {
            case '15': setIsCustomRangeSelected(false);
                        setSelectedMinimumRangeValue(Number(value));
                        break;
            case '12': setIsCustomRangeSelected(false);
                        setSelectedMinimumRangeValue(Number(value));
                        break;
            case 'custom-range': setIsCustomRangeSelected(true);
                        break;
            default: console.log('No button is selected');
                        break;
        }
    }

    const handleInputSelectedRange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        handleMinimumRangeValue(value);
    }

    const handleLabelSelectedRange = (e: React.MouseEvent<HTMLLabelElement> ) => {
        const value = e.currentTarget.dataset.rangeValue;
        handleMinimumRangeValue(value);
    }

    const customRangeContent =             
            <div className='custom-range-container'>
                <div className='custom-range-value'>{isCustomRangeSelected ? selectedMinimumRangeValue : ''}</div>
                <div className='custom-range-input-container'>
                    <div className='custom-range-min-max-value'>1</div>
                    <input id='custom-range' className='custom-range-input' type='range' disabled={isCustomRangeSelected ? false : true} min='1' max='20' step='1' onChange={(e) => handleSelectedCustomRange(e)}></input>
                    <div className='custom-range-min-max-value'>Bull</div>
                </div>
            </div>

    return (
        <div className='game-range-container'>
            <div className='game-range-title'>GAME RANGE</div>
            <div className='game-range-caption'>Choose the range you'll play</div>
            <div className='range-container'>
                <label htmlFor='fifteen-bull' data-range-value='15' onClick={(e) => handleLabelSelectedRange(e)}>
                    <input id='fifteen-bull' className='target-range-input' type='radio' name='target-range' value='15' onChange={(e) => handleInputSelectedRange(e) } ></input>
                    15 to Bull
                </label>
                <label htmlFor='twelve-bull' data-range-value='12' onClick={(e) => handleLabelSelectedRange(e)}>
                    <input id='twelve-bull' className='target-range-input' type='radio' name='target-range' value='12' onChange={(e) => handleInputSelectedRange(e) }></input>
                    12 to Bull
                </label>
                <label htmlFor='custom-range-option' data-range-value='custom-range' onClick={() => setIsCustomRangeSelected(true)}>
                    <input id='custom-range-option' className='target-range-input' type='radio' name='target-range' value='custom-range' onChange={() => setIsCustomRangeSelected(true)}></input>
                    Custom Range
                </label>
            </div>
            {isCustomRangeSelected && customRangeContent}
        </div>
    )
}
export default GameRange