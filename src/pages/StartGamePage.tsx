import { useContext, useEffect } from 'react'
import UserContext, { type UserContextType } from '../context/UserContext'
import Footer from '../components/Footer';
import ShowTargetsAndScoreContainers from '../components/ShowTargetsAndScoreContainers';
import ShowPlayersName from '../components/ShowPlayersName';
import { ShowScoreChoices } from '../components/ShowScoreChoices';
import SetPointRecordContainer from '../components/SetPointRecordContainer';
import ShowWinnerContainer from '../components/ShowWinnerContainer';
import { useNavigate } from 'react-router-dom';

const StartGamePage = () => {

    const { players, setPlayers, setPlayerName, setPlayerIndex, setSelectedMinimumRangeValue, setChosenScore, setWeHaveAWinner, setScoreChoicesIsVisible, setPlayerScoreContainerClass, setScoreboardPlayersNameContainerClass, scoreChoicesIsVisible, playingAgain, setPlayingAgain, weHaveAWinner } = useContext(UserContext) as UserContextType;
    const nav = useNavigate();

    useEffect(() => {
        setPlayingAgain(false);
        switch (players.length) {
            case 1: setPlayerScoreContainerClass('player-score-row-one-player');
                    setScoreboardPlayersNameContainerClass('scoreboard-one-player-name-container');
                    break;
            case 2: setPlayerScoreContainerClass('player-score-row-two-players');
                    setScoreboardPlayersNameContainerClass('scoreboard-two-players-name-container');
                    break;
            case 3: setPlayerScoreContainerClass('player-score-row-three-players');
                    setScoreboardPlayersNameContainerClass('scoreboard-three-players-name-container');
                    break;
            case 4: setPlayerScoreContainerClass('player-score-row-four-players');
                    setScoreboardPlayersNameContainerClass('scoreboard-four-players-name-container');
                    break;
            default: console.log('Number of players should be 2 to 4')
                    break;
        }
    },[setPlayers]);

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
        <div className='game-container'>
            <div className='game-title-container'>
                <div className='game-title-wrapper'>
                    <span className="game-title">DART MASTERS SCOREBOARD</span>
                </div>
            </div>
            
            <ShowPlayersName />
            <ShowTargetsAndScoreContainers />
            {scoreChoicesIsVisible ? <ShowScoreChoices /> : null}
            {playingAgain ? <SetPointRecordContainer /> : null}
            {weHaveAWinner && <ShowWinnerContainer />}
            {!weHaveAWinner && <button className='btn start-game-page-quit-btn' onClick={() => handleQuit()} >QUIT</button>}
            <Footer />
        </div>
    )
}

export default StartGamePage