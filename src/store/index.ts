import { configureStore } from '@reduxjs/toolkit'
import tarefasReducer from './reducers/Tarefas'

const store = configureStore({
  reducer: {
    tarefas: tarefasReducer
  }
})

type RootReducer = ReturnType<typeof store.getState>
export default store
