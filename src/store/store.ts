import { applyMiddleware, configureStore } from '@reduxjs/toolkit'
import accountReducer from './account'
import gameReducer from './game'
import { socketMiddleware } from './middleware'



export default configureStore({
  reducer: {
    account: accountReducer,
    game: gameReducer
  },
  enhancers: [
    applyMiddleware(socketMiddleware)
  ]
})