import Footer from '../components/Footer'
import ButtonNav from '../components/ButtonNav'

const HowToPlayPage = () => {
  return (
    <div className='how-to-play-container'>
        <div className='how-to-play-title-container'>
            <div className='how-to-play-title'>HOW TO PLAY</div>
            <div className='how-to-play-caption-wrapper'>
              <div className='how-to-play-caption'>TACTICS (ALSO KNOWN AS: “CUTTHROAT CRICKET”)</div>
            </div>
        </div>
        <div className='how-to-play-details-container'>
            <div className='how-to-play-page-description-title'>Objective
              <p className='how-to-play-objective'>“Close” the numbers 15, 16, 17, 18, 19, 20, and Bull (or whatever customized range you prefer), and have equal or more points than your opponent (if enabled).</p>
            </div>
            <div className='how-to-play-page-description-title'>How Scoring Works
              <p className='how-to-play-details'>Each target number must be hit three times to “close” it.</p>
              <p className='how-to-play-details'>Valid hits:</p>
              <p className='how-to-play-details indent'>Single segment = 1 hit</p>
              <p className='how-to-play-details indent'>Double ring = 2 hits</p>
              <p className='how-to-play-details indent'>Triple ring = 3 hits</p>
              <p className='how-to-play-details'>Once YOU close a number, you may score points on it until the opponent also closes it.</p>
            </div>
            <div className='how-to-play-page-description-title'>Scoring Points
              <p className='how-to-play-details'>You score only on numbers that:</p>
              <p className='how-to-play-details indent'>Are already closed by you</p>
              <p className='how-to-play-details indent'>Are not closed by the opponent</p>
              <p className='how-to-play-details'>Example:</p>
              <p className='how-to-play-details indent'>You hit Triple 20 = closes 20 (3 marks) immediately</p>
              <p className='how-to-play-details indent'>If opponent hasn’t closed 20, any future 20s you hit give you 20 points per single, 40 for double, 60 for triple.</p>
            </div>
            <div className='how-to-play-page-description-title'>Winning
              <p className='how-to-play-details'>You must:</p>
              <p className='how-to-play-details indent'>Close ALL numbers</p>
              <p className='how-to-play-details indent'>Have more or equal points than your opponent</p>
              <p className='how-to-play-details indent'>If you close everything but are behind in points, you must keep scoring on unclosed numbers until ahead.</p>
            </div>
        </div>
        
         <div className='how-to-play-btn-container'>
            <ButtonNav classes='btn how-to-play-player-btn' choice='players' text='Play' />
            <ButtonNav classes='btn how-to-play-back-btn' choice='' text='Back to Home' />
            <ButtonNav classes='btn how-to-play-the-board-btn' choice='the-board' text='The Board' />
        </div>
        <Footer />
    </div>
  )
}

export default HowToPlayPage