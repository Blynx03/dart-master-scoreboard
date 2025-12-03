import { useContext, useEffect, useRef, useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, type NavigateFunction } from 'react-router-dom';
import './App.css'
import MainPage from './pages/MainPage'
import UserContext, { type PlayersType, type UserContextType } from './context/UserContext';
import PlayPage from './pages/PlayPage';
import HowToPlayPage from './pages/HowToPlayPage';
import TheBoardPage from './pages/TheBoardPage';
import StartGamePage from './pages/StartGamePage';

function App() {

  const [ playerName, setPlayerName ] = useState('');
  const [ playerIndex, setPlayerIndex ] = useState<number | undefined>();
  const [ players, setPlayers ] = useState<PlayersType[]>([]);
  const inputPlayerNameRef = useRef<HTMLInputElement>(null);
  const [ selectedMinimumRangeValue, setSelectedMinimumRangeValue ] = useState<number>(0);
  const [ playersTurn, setPlayersTurn ] = useState<string>('');
  const [ playerScoreContainerClass, setPlayerScoreContainerClass ] = useState<string>('');
  const [ scoreboardPlayersNameContainerClass, setScoreboardPlayersNameContainerClass ] = useState<string>('');
  const [ scoreChoicesIsVisible, setScoreChoicesIsVisible ] = useState(false);
  const [ chosenScore, setChosenScore ] = useState<string>('');

  
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
    chosenScore, setChosenScore
  }

  return ( 
    <BrowserRouter>
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
