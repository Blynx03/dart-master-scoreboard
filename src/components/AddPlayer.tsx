import { useContext, useEffect } from 'react'
import UserContext, { type UserContextType } from '../context/UserContext';

const AddPlayer = () => {

    const { playerName, setPlayerName, players, setPlayers, inputPlayerNameRef } = useContext(UserContext) as UserContextType;

     const handleAddPlayer = () => {
        if (!playerName.trim() || players.length === 4) {
            inputPlayerNameRef.current && (inputPlayerNameRef.current.value = '') 
            return;
        } else {
            setPlayers((prev) => [...prev, {name: playerName}])
            setPlayerName('');
            if (inputPlayerNameRef.current) {
                inputPlayerNameRef.current.value = '';
                inputPlayerNameRef.current.focus();
            }
        }
        
    }

    const handleDelete = (name: string) => {
        const newPlayers = players.filter((player) => player.name !== name )
        setPlayers(newPlayers)
    }

    const playersNameContainer = 
            <div className='players-name-container'>
                {players.map((player, i) =>  
                    <div key={i} className='player-name-container' >
                        <span>Player {i+1}: </span>
                        <div data-value={i}>{player.name}</div>
                        <span key={player.name+i} onClick={() => handleDelete(player.name)} className='material-symbols-outlined delete-icon'>delete</span>
                    </div>
                )}
            </div>

  return (
    <>
        <div className='add-player-title'>ADD PLAYERS</div>
        <div className='add-players-container'>
            <div className='player-input-container'>
                <input ref={inputPlayerNameRef} className='add-player-input' type='text' id='add-player-input' name='name' placeholder="Enter Player's Name" onChange={(e) => setPlayerName(e.target.value)} autoFocus></input>
                <button className='btn add-player-btn' onClick={() => handleAddPlayer()}>+Add</button>
            </div>
            { players.length > 0 && playersNameContainer }
        </div>
    </>
  )
}

export default AddPlayer
