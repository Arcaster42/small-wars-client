import { useState } from 'react'
import { useDispatch } from 'react-redux'
import '../css/Login.css'
import { AccountDispatch, setUsername, socketEmit } from '../store/account'

function Login () {
  const [username, updateUsername] = useState('')
  const [password, updatePassword] = useState('')
  const dispatch: AccountDispatch = useDispatch<AccountDispatch>()
  
  return (
    <div className="form-inputs">
      <p>Username</p>
      <input type="text" value={username} onChange={(e) => {updateUsername(e.target.value)}} />
      <p>Password</p>
      <input type="password" value={password} onChange={(e) => {updatePassword(e.target.value)}} />
      <button className="login-btn" onClick={login}>Login</button>
    </div>
  )

  function login (): void {
    dispatch(setUsername(username))
    dispatch(socketEmit('login', { username }))
  }
}


export default Login