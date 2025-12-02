import React, { useContext, useState } from 'react'
import UserContext, { type UserContextType } from '../context/UserContext';

export const ShowScoreChoices = () => {
    const { playerScoreColumn, playerScoreRow, setPlayerTargetScore, setShowInputScoreContainer, setChosenScore, setPlayerTileScore } = useContext(UserContext) as UserContextType;
    

    const handleChosenScore = (score: number, row: number, col: number) => {
        console.log(row, ' _ ', col);
        setPlayerTargetScore(prev => {
            const newScore = prev.map(val => [...val]);
            newScore[row][col] = score;
            console.log(newScore);
            return newScore;
        });

         setPlayerTileScore(prev => {
            const newScore = prev.map(val => [...val]);
            newScore[row][col] = score === 1 ? '|' : score === 2 ? '||' : '|||';
            console.log('new Score = ', newScore);
            return newScore;
        });

        switch(score) {
            case 1: setChosenScore('|');
                    break;
            case 2: setChosenScore('| |');
                    break;
            case 3: setChosenScore('| | |');
                    break;
            default: console.log('No chosen score');
                    break;

        }
        setShowInputScoreContainer(false);
    }

    return (
        <div className='player-score-choices-wrapper'>
            <div className='player-score-choices-caption'>Tap Score</div>
            <div className='player-score-choices-container'>
                <span className='player-score player-score-i' onClick={() => handleChosenScore(1, playerScoreRow, playerScoreColumn)}>|
                    <span className='separator'>&nbsp;/&nbsp;</span>
                </span>
                <span className='player-score player-score-ii' onClick={() => handleChosenScore(2, playerScoreRow, playerScoreColumn)}>||
                    <span className='separator'>&nbsp;/&nbsp;</span></span>
                <span className='player-score player-score-iii' onClick={() => handleChosenScore(3, playerScoreRow, playerScoreColumn)}>|||</span>
            </div>
        </div>
    
    )
}


