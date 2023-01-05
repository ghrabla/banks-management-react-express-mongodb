import { configureStore } from '@reduxjs/toolkit'
import authadminReducer from '../services/authadmin/authSlice'
import authclientReducer from '../services/authclient/authSlice'

export const store = configureStore({
  reducer: {
    authadmin: authadminReducer,
    authclient: authclientReducer,
  },
})
