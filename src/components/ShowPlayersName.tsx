import React, { useContext } from 'react'
import UserContext, { type UserContextType } from '../context/UserContext'

const ShowPlayersName = () => {

    const { players, scoreboardPlayersNameContainerClass } = useContext(UserContext) as UserContextType;

    return (
        <div className='scoreboard-target-players-name-container'>
            <div className='scoreboard-target-wrapper'>
                <div className='scoreboard-target-title'>
                    Target
                </div>
            </div>
            <div className={'scoreboard-players-name-container'}>
                {players.map((player,i) => 
                    <div key={`${player}${i}`} className={`scoreboard-player-name-wrapper ${scoreboardPlayersNameContainerClass}`}>
                        <div key={`${player.name} + ${i}`} className={'scoreboard-player-name-title'}>{player.name}</div>
                   </div>
                )}           
            </div>
        </div>
    )
}

export default ShowPlayersName