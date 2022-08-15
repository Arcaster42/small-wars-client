import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AccountState, socketEmit } from "../store/account"

function Matchmaking () {
  const dispatch = useDispatch()
  const username = useSelector((state: AccountState) => state.account.username)
  const [label, updateLabel] = useState('Start Matchmaking')

  return (
    <div>
      <button onClick={startMatchmaking}>{label}</button>
    </div>
  )

  function startMatchmaking () {
    updateLabel('Matchmaking...')
    dispatch(socketEmit('match search', { username }))
  }
}

export default Matchmaking