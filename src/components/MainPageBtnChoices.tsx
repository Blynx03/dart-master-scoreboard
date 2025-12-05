import ButtonNav from './ButtonNav'

const MainPageBtnChoices = () => {    

    return (
        <div className='main-btn-container'>
            <ButtonNav classes='btn main-play-btn' choice='players' text='Play' />
            <ButtonNav classes='btn main-how-to-play-btn' choice='how-to-play' text='How to Play' />
            <ButtonNav classes='btn main-the-board-btn' choice='the-board' text='The Dart Board' />
        </div>
    )
}

export default MainPageBtnChoices