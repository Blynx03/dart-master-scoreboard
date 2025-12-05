import React, { useContext } from 'react'
import UserContext, { type UserContextType } from '../context/UserContext';
import TargetScoreContainer from './TargetScoreContainer';

const ShowTargetsAndScoreContainers = () => {
    const { selectedMinimumRangeValue } = useContext(UserContext) as UserContextType;
    

    const range = 22 - selectedMinimumRangeValue;
    const rangeArray = Array.from({length: range}, (_,i) => range - i);

    return (
        <div className='target-score-area-container'>
            {rangeArray.map((_, i) => {
                return (
                    <React.Fragment key={i}>
                        <TargetScoreContainer target={20-i} playerIndex={i}/>
                    </React.Fragment>
                )
            })}
        </div>
    )

}


export default ShowTargetsAndScoreContainers