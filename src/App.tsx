import { useContext, useEffect, useRef, useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, type NavigateFunction } from 'react-router-dom';
import './App.css'
import MainPage from './pages/MainPage'
import UserContext, { type UserContextType } from './context/UserContext';
import PlayPage from './pages/PlayPage';
import HowToPlayPage from './pages/HowToPlayPage';
import TheBoardPage from './pages/TheBoardPage';
import StartGamePage from './pages/StartGamePage';

function App() {

  const [ playerName, setPlayerName ] = useState('');
  const [ players, setPlayers ] = useState<string[]>([]);
  const inputPlayerNameRef = useRef<HTMLInputElement>(null);
  const [ selectedMinimumRangeValue, setSelectedMinimumRangeValue ] = useState<number>(0);

  
  const value = {
    playerName, setPlayerName,
    players, setPlayers,
    inputPlayerNameRef,
    selectedMinimumRangeValue, setSelectedMinimumRangeValue
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
