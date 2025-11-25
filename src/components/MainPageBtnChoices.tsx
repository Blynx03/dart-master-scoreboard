import React from 'react'
import Button from './Button'

const MainPageBtnChoices = () => {    

    return (
        <div className='main-btn-container'>
            {/* <Button classes='btn home-btn' choice='Home' clickHandler={() => handleClick('home')} /> */}
            <Button classes='btn main-play-btn' choice='players' text='Play' />
            <Button classes='btn main-how-to-play-btn' choice='how-to-play' text='How to Play' />
            <Button classes='btn main-the-board-btn' choice='the-board' text='The Dart Board' />
        </div>
    )
}

export default MainPageBtnChoices