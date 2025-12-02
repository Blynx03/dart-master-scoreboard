import React, { useContext, useState, useEffect, type ReactNode } from 'react'
import UserContext, { type UserContextType } from '../context/UserContext'
import ButtonNav from '../components/ButtonNav';
import Footer from '../components/Footer';
import ShowTargetsAndScoreContainers from '../components/ShowTargetsAndScoreContainers';
import ShowPlayersName from '../components/ShowPlayersName';
import { ShowScoreChoices } from '../components/ShowScoreChoices';

const StartGamePage = () => {

    const { players, setPlayers, selectedMinimumRangeValue, playersTurn, setPlayerScoreContainerClass, setScoreboardPlayersNameContainerClass, showInputScoreContainer, setPlayersTurn } = useContext(UserContext) as UserContextType;
    const [ activePlayer, setActivePlayer ] = useState<string>('');
    const [ isClickable, setIsClickable ] = useState<boolean>(false);

    useEffect(() => {
        console.log(selectedMinimumRangeValue);
        console.log(players)
        switch (players.length) {
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

    const handleAddScore = () => {
        console.log('score added')
        // make targets clickable only when add-score-btn is pressed
        // provide 3 choices for scoring (1, 2 and 3)
        // store points in useState for each player
        // 
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
            {showInputScoreContainer ? <ShowScoreChoices /> : null}
            <button className='add-score-btn' onClick={()=>handleAddScore()} value={playersTurn} />
            <ButtonNav classes='btn' choice='' text='Quit' />
            <Footer />
        </div>
    )
}

export default StartGamePage