import { useContext } from 'react'
import UserContext, { type UserContextType } from '../context/UserContext'

const SetPointRecordContainer = () => {
    const { players } = useContext(UserContext) as UserContextType;
  return (
    <div className='set-point-container'>
        <div className='set-point-caption'>
            SET POINT SCORES:
        </div>
        <div className='set-point-score-container'>
            {players.map((player, i) => (
                <div className='set-point-player-score-container' key={i}>
                    {`${player.name}: ${player.setPointScore ?? 0}`}
                </div>
            ))}
        </div>
    </div>
  )
}

export default SetPointRecordContainer