import React from 'react'
import Button from '../components/Button'
import Footer from '../components/Footer'

const TheBoardPage = () => {
  return (
    <div className='the-board-page-container'>

        <div className='the-board-page-title-container'>
            <div className='the-board-title'>Understanding the Dartboard</div>
            <div className='the-board-caption'>A simple guide to what every part of the board does.</div>
        </div>

        <div className='the-board-page-description-container'>
            <div className='the-board-page-description-title'>🎯 1. Single Area
              <p className='the-board-page-description'>These are the large sections of each number.</p>
              <p className='the-board-page-description'>A dart landing here scores the exact value shown (1 to 20).</p>
            </div>            

            <div className='the-board-page-description-title'>🎯 2. Double Ring
              <p className='the-board-page-description'>The thin outer ring around the edge of the board.</p>
              <p className='the-board-page-description'>Points are doubled (e.g., hitting the double 20 = 40).</p>
              <p className='the-board-page-description'>In some games, this ring is also used to start or end the game (e.g., “double-out”).</p>
            </div>

            <div className='the-board-page-description-title'>🎯 3. Triple Ring
              <p className='the-board-page-description'>The thin middle ring inside each number area.</p>
              <p className='the-board-page-description'>Points are tripled (e.g., triple 20 = 60).</p>
              <p className='the-board-page-description'>This is the highest-scoring part of the board.</p>
            </div>

            <div className='the-board-page-description-title'>🎯 4. Outer Bull (25 Ring)
              <p className='the-board-page-description'>The green ring around the center.</p>
              <p className='the-board-page-description'>Worth 25 points.</p>
              <p className='the-board-page-description'>Also known as the “single bull.”</p>
            </div>

            <div className='the-board-page-description-title'>🎯 5. Inner Bull (Bullseye)
              <p className='the-board-page-description'>The red center circle of the board.</p>
              <p className='the-board-page-description'>Worth 50 points.</p>
              <p className='the-board-page-description'>In many games, this also counts as a double for finishing.</p>
            </div>

            <div className='the-board-page-description-title'>🎯 6. Number Ring
              <p className='the-board-page-description'>The metal ring showing numbers 1–20 around the board.</p>
              <p className='the-board-page-description'>These numbers indicate the score value of each wedge.</p>
              <p className='the-board-page-description'>The number ring can rotate on some boards so the high-use areas wear evenly.</p>
            </div>

            <div className='the-board-page-description-title'>🎯 7. Spider (Wire Dividers)
              <p className='the-board-page-description'>The wires separating each scoring section.</p>
              <p className='the-board-page-description'>They help define the scoring areas.</p>
              <p className='the-board-page-description'>Thinner, blade-style spiders reduce bounce-outs by letting darts slide in easier.</p>
            </div>

            <div className='the-board-page-description-title'>🎯 8. Dead Zones (Wire Hits)
              <p className='the-board-page-description'>If a dart hits the wire, it may bounce out.</p>
              <p className='the-board-page-description'>These do not count for points.</p>
              <p className='the-board-page-description'>High-quality boards reduce this problem.</p>
            </div>

            <div className='the-board-page-description-title'>🎯 9. The 20 Segment (Top of Board)
              <p className='the-board-page-description'>Official boards place 20 at the very top.</p>
              <p className='the-board-page-description'>This orients the board correctly for fair play.</p>
              <p className='the-board-page-description'>The 20 area is the main high-value target for scoring.</p>
            </div>
        </div>
        
        <div className='the-board-btn-container'>
            <Button classes='btn the-board-player-btn' choice='players' text='Play' />
            <Button classes='btn the-board-back-btn' choice='' text='Back to Home' />
            <Button classes='btn the-board-how-to-play-btn' choice='how-to-play' text='How To Play' />
        </div>
        <Footer />
    </div>
  )
}

export default TheBoardPage