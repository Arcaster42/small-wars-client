import { createSlice } from '@reduxjs/toolkit'
import store from './store'

export const accountSlice = createSlice({
  name: 'account',
  initialState: {
    username: null,
    socket: null,
    isLoggedIn: false
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload
    },
    setSocket: (state, action) => {
      state.socket = action.payload
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload
    }
  }
})

export const socketEmit = (msg: string, data: {}) => {
  return { type: 'socket/emit', payload: { msg, data } }
}

export const { setUsername, setSocket, setIsLoggedIn } = accountSlice.actions
export type AccountState = ReturnType<typeof store.getState>
export type AccountDispatch = typeof store.dispatch
export default accountSlice.reducer