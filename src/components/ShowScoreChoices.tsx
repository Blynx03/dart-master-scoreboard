import React, { useContext, useState } from 'react'
import UserContext, { type UserContextType } from '../context/UserContext';

export const ShowScoreChoices = () => {
    const { players, playerName, playerIndex, setPlayers, setChosenScore, setScoreChoicesIsVisible } = useContext(UserContext) as UserContextType;
    
    const updateScore = (score: number, storeScore: string) => {
        const updatedPlayers = players.map((player, i) => {
            if (player.name !== playerName || playerIndex === undefined) return player;

            return {...player, numberScores: {...(player.numberScores || {}), [playerIndex]: score}, stringScores: {...(player.stringScores || {}), [playerIndex]: storeScore} 
            }})
        console.log('updated Players = ', updatedPlayers)
        setPlayers(updatedPlayers);

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
            <div className='player-score-choices-caption'>Tap Score</div>
            <div className='player-score-choices-container'>
                <span className='player-score player-score-i' onClick={() => handleChosenScore(1)}>|
                    <span className='separator'>&nbsp;/&nbsp;</span>
                </span>
                <span className='player-score player-score-ii' onClick={() => handleChosenScore(2)}>||
                    <span className='separator'>&nbsp;/&nbsp;</span></span>
                <span className='player-score player-score-iii' onClick={() => handleChosenScore(3)}>|||</span>
            </div>
            <button className='player-score-choices-cancel-btn' onClick={(() => setScoreChoicesIsVisible(false))}>Cancel</button>
        </div>
    
    )
}


