import { configureStore } from '@reduxjs/toolkit'
import authclientReducer from '../services/authclient/authSlice'

export const store = configureStore({
  reducer: {
    authclient: authclientReducer,
   
    
  },
})
