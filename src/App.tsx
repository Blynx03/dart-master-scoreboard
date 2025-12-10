import { useRef, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import MainPage from './pages/MainPage'
import UserContext, { type PlayersType } from './context/UserContext';
import PlayPage from './pages/PlayPage';
import HowToPlayPage from './pages/HowToPlayPage';
import TheBoardPage from './pages/TheBoardPage';
import StartGamePage from './pages/StartGamePage';

function App() {

  const [ playerName, setPlayerName ] = useState('');
  const [ playerIndex, setPlayerIndex ] = useState<number>(0);
  const [ players, setPlayers ] = useState<PlayersType[]>([]);
  const inputPlayerNameRef = useRef<HTMLInputElement>(null);
  const [ selectedMinimumRangeValue, setSelectedMinimumRangeValue ] = useState<number>(11);
  const [ playersTurn, setPlayersTurn ] = useState<string>('');
  const [ playerScoreContainerClass, setPlayerScoreContainerClass ] = useState<string>('');
  const [ scoreboardPlayersNameContainerClass, setScoreboardPlayersNameContainerClass ] = useState<string>('');
  const [ scoreChoicesIsVisible, setScoreChoicesIsVisible ] = useState(false);
  const [ chosenScore, setChosenScore ] = useState<string>('');
  const [ weHaveAWinner, setWeHaveAWinner ] = useState<boolean>(false);
  const [ playingAgain, setPlayingAgain ] = useState<boolean>(false);
  const [ setPointWinner, setSetPointWinner ] = useState<string>('');

  
  const value = {
    playerName, setPlayerName,
    playerIndex, setPlayerIndex,
    players, setPlayers,
    inputPlayerNameRef,
    selectedMinimumRangeValue, setSelectedMinimumRangeValue,
    playersTurn, setPlayersTurn,
    playerScoreContainerClass, setPlayerScoreContainerClass,
    scoreboardPlayersNameContainerClass, setScoreboardPlayersNameContainerClass,
    scoreChoicesIsVisible, setScoreChoicesIsVisible,
    chosenScore, setChosenScore,
    weHaveAWinner, setWeHaveAWinner,
    playingAgain, setPlayingAgain,
    setPointWinner, setSetPointWinner
  }

  return ( 
    <BrowserRouter basename="/dart-master-scoreboard">
      <UserContext.Provider value={value}>
          <Routes>
              <Route path='/' element={<MainPage />} />
              <Route path='/players' element={<PlayPage />} />
              <Route path='/how-to-play' element={<HowToPlayPage />} />
              <Route path='/the-board' element={<TheBoardPage />} />
              <Route path='/start-game' element={<StartGamePage />} />
          </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App
