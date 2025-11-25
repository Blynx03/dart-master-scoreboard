import React, { useContext, type ReactNode } from 'react'
import UserContext, { type UserContextType } from '../context/UserContext'
import Title from '../components/Title';

const StartGamePage = () => {

    const { players, selectedMinimumRangeValue } = useContext(UserContext) as UserContextType;

    let playersName: ReactNode = 
        players.map((player,i) => 
            <div key={`${player} + ${i}`}>{player}</div>
        )
    
    const showPlayers: ReactNode = 
        <div className='players-name-container'>
            <div className='target'>
                Target
            </div>
            {playersName}
        </div>
    
    const totalTargets = Array.from( {length: 20});

    let showTargets: ReactNode = 
        totalTargets.map((_, i) => 
            <div className='target-score-container' key={`target${i}`}>
                <div className='target'>
                    {(totalTargets.length - i) >= selectedMinimumRangeValue ? totalTargets.length - i : (totalTargets.length - i) === selectedMinimumRangeValue - 1 && 'Bull'}
                </div>
                <div className='score-container'>
                    {(totalTargets.length - i) >= selectedMinimumRangeValue - 1 && players.map((player) => 
                        <div className='target-score-row' key={`${player}${totalTargets.length - i}`}>
                            {player}
                            {/* insert the scoring logic here */}
                        </div>
                    )}
                </div>
            </div>
        ) 

    return (
        <div className='game-container'>
            <Title />
            {showPlayers}
            {showTargets}
        </div>
    )
}

export default StartGamePage