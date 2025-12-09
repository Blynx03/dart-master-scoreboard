import { useContext } from 'react'
import UserContext, { type UserContextType } from '../context/UserContext'

export interface TargetScoreProps {
    target: number,
    playerIndex: number
}

const TargetScoreContainer = ({target, playerIndex }: TargetScoreProps) => {
    const { players, setPlayerName, setPlayerIndex, selectedMinimumRangeValue, playerScoreContainerClass, scoreChoicesIsVisible, setScoreChoicesIsVisible, weHaveAWinner } = useContext(UserContext) as UserContextType;

    const handleClick = (playerName: string, playerIndex: number) => {
        setPlayerName(playerName);
        setPlayerIndex(playerIndex);
        setScoreChoicesIsVisible(true);
    }

    return (
        <div className='target-score-container'>
            <div className='target-container'>{target+1 > selectedMinimumRangeValue ? target : "Bull" }</div>
            <div className='player-score-container'>
                {players.map((player, index) => 
                    (
                        <div className={`score-container ${playerScoreContainerClass}`} key={index} onClick={scoreChoicesIsVisible || weHaveAWinner ?  undefined : () => handleClick(player.name, playerIndex)} >
                            <div className='score'>
                                {player.stringScores?.[playerIndex]}
                            </div>
                        </div>
                    )
                )}
            </div>

        </div>
    )
}

export default TargetScoreContainer