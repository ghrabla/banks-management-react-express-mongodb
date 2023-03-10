import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import res from 'express/lib/response'
import clientService from './clientService'

const initialState = {
  clients: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}


// Get user clients
export const getclients = createAsyncThunk(
  'clients/getAll',
  async (_, thunkAPI) => {
    try {
      // const token = thunkAPI.getState().auth.user.token
      return await clientService.getclients()
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


// Get user clients
export const getoneclient = createAsyncThunk(
  'clients/getone',
  async (id_client) => {
    try {
      // const token = thunkAPI.getState().auth.user.token
      return await clientService.getoneclient(id_client)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
    }
  }
)


export const updateclient = createAsyncThunk(
  'clients/update',
  async (clientdata,{ dispatch, getState }) => {
    try { 
      // const token = thunkAPI.getState().auth.user.token
      
      const res = await clientService.updateclient(clientdata.dataid,clientdata.clientInfo)
      // dispatch(getclients())
      return res;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      // return thunkAPI.rejectWithValue(message)
    }
  }
)


// Delete user client
export const deleteclient = createAsyncThunk(
  'clients/delete',
  async (id,{ dispatch, getState }) => {
    try {
      // const token = thunkAPI.getState().auth.user.token
    const res = await clientService.deleteclient(id)
    dispatch(getclients());
    return res;
  
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      // return rejectWithValue(message)
    }
  }
)

export const clientSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getclients.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getclients.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.clients = action.payload
      })
      .addCase(getclients.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(updateclient.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateclient.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.clients = action.payload
      })
      .addCase(updateclient.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteclient.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteclient.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.clients = state.clients.filter(
          (client) => client._id !== action.payload.id
        )
      })
      .addCase(deleteclient.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = clientSlice.actions
export default clientSlice.reducer
