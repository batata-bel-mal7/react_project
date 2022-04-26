import NetInfo, { NetInfoState } from '@react-native-community/netinfo'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export type NetworkInfoState = Partial<NetInfoState> & {
  updating: boolean
  error: Error | null
  initialized: boolean
}
const initialState: NetworkInfoState = {
  updating: false,
  error: null,
  initialized: false,
}

const refetchNetworkInfo = createAsyncThunk(
  'networkInfo/refetch',
  async (): Promise<NetInfoState> => {
    return await NetInfo.fetch()
  }
)

const initNetworkInfo = createAsyncThunk(
  'networkInfo/initNetInfo',
  async () => {
    return await NetInfo.fetch()
  }
)

export const networkInfoSlice = createSlice({
  name: 'networkInfo',
  initialState,
  reducers: {
    setNetworkInfo: (state, action: PayloadAction<NetInfoState>) => {
      if (state.isInternetReachable === false) {
        return
      }
      if (state.isConnected !== action.payload.isConnected) {
        state.isConnected = action.payload.isConnected
        state.isInternetReachable = action.payload.isInternetReachable
        state.type = action.payload.type
        state.details = action.payload.details
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        initNetworkInfo.fulfilled,
        (state, action: PayloadAction<NetInfoState>) => {
          state.details = action.payload.details
          state.isConnected = action.payload.isConnected
          state.isInternetReachable = action.payload.isInternetReachable
          state.type = action.payload.type
          state.updating = false
          state.initialized = true
        }
      )
      .addCase(initNetworkInfo.pending, (state) => {
        state.updating = true
      })
      .addCase(
        initNetworkInfo.rejected,
        (state, action: PayloadAction<any>) => {
          state.error = action.payload.error
          state.updating = false
        }
      )
      .addCase(
        refetchNetworkInfo.fulfilled,
        (state, action: PayloadAction<NetInfoState>) => {
          state.details = action.payload.details
          state.isConnected = action.payload.isConnected
          state.isInternetReachable = action.payload.isInternetReachable
          state.type = action.payload.type
          state.updating = false
        }
      )
      .addCase(refetchNetworkInfo.pending, (state) => {
        state.updating = true
      })
      .addCase(
        refetchNetworkInfo.rejected,
        (state, action: PayloadAction<any>) => {
          state.error = action.payload.error
          state.updating = false
        }
      )
  },
})

export { initNetworkInfo as initNetInfo, refetchNetworkInfo }
export const { setNetworkInfo } = networkInfoSlice.actions
export const selectNetworkInfo = (state: RootState) => state.netwrokInfo

export default networkInfoSlice.reducer
