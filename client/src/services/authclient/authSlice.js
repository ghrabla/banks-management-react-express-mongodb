import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'

// Get client from localStorage
const client = JSON.parse(localStorage.getItem('client'))

const initialState = {
  client: client ? client : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Register client
export const register = createAsyncThunk(
  'client/register',
  async (client, thunkAPI) => {
    try {
      return await authService.register(client)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Login client
export const login = createAsyncThunk('authclient/login', async (client, thunkAPI) => {
  try {
    return await authService.login(client)
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const logout = createAsyncThunk('authclient/logout', async () => {
  await authService.logout()
})

export const authSlice = createSlice({
  name: 'authclient',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.client = action.payload
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.client = null
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.client = action.payload
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.client = null
      })
      .addCase(logout.fulfilled, (state) => {
        state.client = null
      })
  },
})

export const { reset } = authSlice.actions
export default authSlice.reducer
