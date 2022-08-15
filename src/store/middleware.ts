import { io } from 'socket.io-client'
import { Middleware, MiddlewareAPI } from "@reduxjs/toolkit"
import { Socket } from "socket.io-client"
import { setIsLoggedIn } from './account'
import { Town } from '../types/game'
import { setIsPlaying, setTown } from './game'

export let socket: Socket | null = null

const createSocket = (store: MiddlewareAPI) => {
  if (!socket) {
    socket = io(String(process.env.REACT_APP_SS))
    socket.on('login approved', () => {
      store.dispatch(setIsLoggedIn(true))
    })
    socket.on('match found', () => {
      store.dispatch(setIsPlaying(true))
    })
    socket.on('update game', (data: Town) => {
      store.dispatch(setTown(data))
    })
  }
}

export const socketMiddleware: Middleware = (store) => {
  return next => (action: { type: string, payload: any }) => {
    console.log(action)
    createSocket(store)
    if (!socket) return

    if (action.type === 'socket/emit') {
      socket.emit(action.payload.msg, action.payload.data)
    }
    next(action)
  }
}