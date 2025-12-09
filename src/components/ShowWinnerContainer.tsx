import { useContext, useState } from 'react'
import UserContext, { type UserContextType } from '../context/UserContext'
import { useNavigate } from 'react-router-dom';
import dartTrophy from '../assets/images/dart-trophy.png'

const ShowWinnerContainer = () => {
    const { players, setPlayers, playerName, setPlayerName, setPlayerIndex, setSelectedMinimumRangeValue, setScoreChoicesIsVisible, setChosenScore, setWeHaveAWinner, setPointWinner, setPlayingAgain} = useContext(UserContext) as UserContextType;

    const nav = useNavigate();

    const playAnotherRound = () => {
        console.log('is clicked')
        const resettedPlayersValues = players.map(player => ({...player, numberScores: {}, stringScores: {}}));
        setPlayers(resettedPlayersValues);
        setPlayerName('');
        setPlayerIndex(0);
        setChosenScore('');
        setWeHaveAWinner(false);
        setScoreChoicesIsVisible(false);
        setPlayingAgain(true);
        nav('/start-game');
    }

    const playNewGame = () => {
        resetAll();
        nav('/players')
    }

    const resetAll = () => {
    setPlayers([]);
    setPlayerName('');
    setPlayerIndex(0);
    setSelectedMinimumRangeValue(0);
    setChosenScore('');
    setWeHaveAWinner(false);
    setScoreChoicesIsVisible(false);
    }

    const handleQuit = () => {
        resetAll();
        nav('/');
    }

  return (
    <div className='winner-container'>
        <div className='winner-caption-container'>
            <div className='winner-caption'>
                WE HAVE A WINNER!
            </div>
            <div className='winner-caption'>
                CONGRATULATIONS
            </div>
            <div className='winner-trophy-player-container'>
                <div className='trophy-container'>
                    <img src={dartTrophy} className='trophy'/>
                </div>
                <div className='winner-player-container'>
                    <div className='winner'>
                        {`${setPointWinner}!`} 
                    </div>
                </div>
            </div>
        </div>
        <div className="winner-btn-container">
            <button className='winner-play-again-btn winner-btn' onClick={() => playAnotherRound()}>PLAY ANOTHER ROUND</button>
            <button className='winner-new-player-btn winner-btn' onClick={() => playNewGame()}>PLAY WITH NEW PLAYERS</button>
            <button className='winner-quit-btn winner-btn' onClick={() => handleQuit()}>QUIT</button>
        </div>
    </div>
  )
}

export default ShowWinnerContainer