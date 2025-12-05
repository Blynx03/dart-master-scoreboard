import { useContext } from 'react'
import Title from '../components/Title'
import AddPlayer from '../components/AddPlayer'
import GameRange from '../components/GameRange'
import UserContext, { type UserContextType } from '../context/UserContext'
import Footer from '../components/Footer'
import ButtonNav from '../components/ButtonNav'

const PlayPage = () => {

   const { players, selectedMinimumRangeValue } = useContext(UserContext) as UserContextType;

    return (
        <>
            <div className='play-page-container'>
                <Title />
                <AddPlayer />
                <GameRange />
                <div className='play-page-done-btns-container'>
                    { (players.length > 0 && selectedMinimumRangeValue !== 0) && 
                        <ButtonNav classes='btn add-player-start-btn' choice='start-game' text='Start Game' />
                    }
                    <ButtonNav classes='btn back-to-main-btn' choice='' text='Main Page' />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default PlayPage