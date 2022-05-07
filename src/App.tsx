import { useSelector } from 'react-redux'
import './App.css'
import Login from './components/Login'
import Matchmaking from './components/Matchmaking'
import Game from './components/Game'
import { AccountState } from './store/account'
import { GameState } from './store/game'

function App() {
  const isLoggedIn = useSelector((state: AccountState) => state.account.isLoggedIn)
  const isPlaying = useSelector((state: GameState) => state.game.isPlaying)

  return (
    <div className="App">
      {!isLoggedIn ? <Login /> : 
       !isPlaying ? <Matchmaking /> : <Game />}
    </div>
  )
}


export default App