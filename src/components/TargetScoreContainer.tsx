import React, { useContext, useState, type Dispatch, type SetStateAction } from 'react'
import UserContext, { type UserContextType } from '../context/UserContext'
import { ShowScoreChoices } from './ShowScoreChoices';

export interface TargetScoreProps {
    target: number,
    range: number,
    playerIndex: number
}

const TargetScoreContainer = ({target, range, playerIndex }: TargetScoreProps) => {
    const { players, setPlayerName, setPlayerIndex, selectedMinimumRangeValue, playerScoreContainerClass, chosenScore, setScoreChoicesIsVisible } = useContext(UserContext) as UserContextType;
    const [ score, setScore ] = useState<string>('');

    const handleClick = (playerName: string, playerIndex: number) => {
        console.log(playerName, ' ', playerIndex)
        console.log('players = ', players)
        setScoreChoicesIsVisible(true);
        setPlayerName(playerName);
        setPlayerIndex(playerIndex);
    }

    return (
        <div className='target-score-container'>
            <div className='target-container'>{target+1 > selectedMinimumRangeValue ? target : "Bull" }</div>
            <div className='player-score-container'>
                {players.map((player, index) => 
                    (
                        <div className={`score-container ${playerScoreContainerClass}`} key={index} onClick={() => handleClick(player.name, playerIndex)} >
                            {player.stringScores?.[playerIndex]}
                            
                        </div>
                    )
                )}
            </div>

        </div>
    )
}

export default TargetScoreContainer