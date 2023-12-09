import { configureStore } from '@reduxjs/toolkit'
// import reduxLogger from 'redux-logger'
import userReducer from '../features/user/userSlice'
import paginationReducer from '../features/PaginationSlice/PaginationSlice'

// const logger = reduxLogger.createLogger()

const store = configureStore({
  reducer:{
    user: userReducer,
    pagination: paginationReducer,
  },
  //middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger),
})

export default store