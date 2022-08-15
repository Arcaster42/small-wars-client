import { createSlice } from '@reduxjs/toolkit'
import { Town } from '../types/game'
import store from './store'

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    isPlaying: false,
    town: null as Town | null
  },
  reducers: {
    setIsPlaying: (state, action) => {
      state.isPlaying = action.payload
    },
    setTown: (state, action) => {
      state.town = action.payload
    }
  }
})

export const { setIsPlaying, setTown } = gameSlice.actions
export type GameState = ReturnType<typeof store.getState>
export default gameSlice.reducer