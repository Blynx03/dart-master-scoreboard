import { useContext } from 'react'
import UserContext, { type PlayersType, type UserContextType } from '../context/UserContext';

export const ShowScoreChoices = () => {
    const { players, setPlayers, playerName, playerIndex, selectedMinimumRangeValue, setChosenScore, setScoreChoicesIsVisible, setWeHaveAWinner, setSetPointWinner } = useContext(UserContext) as UserContextType;

    const updateScore = (score: number, storeScore: string) => {
        const updatedPlayers = players.map((player) => {
            if (player.name !== playerName || playerIndex === undefined) return player;

            return {...player, numberScores: {...(player.numberScores || {}), [playerIndex]: score}, stringScores: {...(player.stringScores || {}), [playerIndex]: storeScore} 
            }})
        setPlayers(updatedPlayers);
        checkScores(updatedPlayers)
    }

    const checkScores = (players: PlayersType[]) => {
        let pl = players.find((p) => p.name === playerName);
            
        let scoreObj = pl?.numberScores;
        let isDone = Object.values(scoreObj!).every(val => val === 3) && (Object.values(scoreObj!).length === (22 - selectedMinimumRangeValue))
        setWeHaveAWinner(isDone);
        if (pl && isDone) {
            pl.setPointScore = (pl.setPointScore ?? 0) + 1;
            setSetPointWinner(pl.name);
        }
    }

    const handleChosenScore = (score: number) => {

        let storeScore = '';
        switch(score) {
            case 1: storeScore ='|';
                    break;
            case 2: storeScore = '| |';
                    break;
            case 3: storeScore = '| | |';
                    break;
            default: console.log('No chosen score');
                    break;

        }
        setChosenScore(storeScore);
        setScoreChoicesIsVisible(false);
        updateScore(score, storeScore);
    }

    return (
        <div className='player-score-choices-wrapper'>
            <div className='player-score-choices-caption'>TAP SCORE</div>
            <div className='player-score-choices-container'>
                <span className='player-score player-score-i' onClick={() => handleChosenScore(1)}>|</span>
                <span className='player-score player-score-ii' onClick={() => handleChosenScore(2)}>||</span>
                <span className='player-score player-score-iii' onClick={() => handleChosenScore(3)}>|||</span>
            </div>
            <button className='player-score-choices-cancel-btn' onClick={(() => setScoreChoicesIsVisible(false))}>CANCEL</button>
        </div>
    
    )
}


