import { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { role } from '../../../types'
import auth from '../../services/auth'

export enum LoginError {
  NO_ERROR = 0,
  USER_NOT_FOUND = 'auth/user-not-found',
  WRONG_PASSWORD = 'auth/wrong-password',
  TOO_MANY_REQUESTS = 'auth/too-many-requests',
}

export type UserState = {
  user: FirebaseAuthTypes.User | null
  firstName?: string
  lastName?: string
  roles?: role[]
  image?: string
  loading: boolean
  error: LoginError
  initialized: boolean
}

const initialState: UserState = {
  user: null,
  loading: false,
  error: LoginError.NO_ERROR,
  initialized: false,
}

const loginWithEmailAndPassword = createAsyncThunk(
  'user/loginWithEmailAndPassword',
  async ({ email, password }: { email: string; password: string }) =>
    auth.signInWithEmailAndPassword(email, password)
)

const logout = createAsyncThunk(
  'user/Logout',
  async (): Promise<UserState> => auth.signOut()
)

const initUser = createAsyncThunk(
  'user/initUser',
  async (): Promise<UserState> => auth.fetchUser()
)
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    ignoreError: (state) => {
      state.error = LoginError.NO_ERROR
    },
  },
  extraReducers: {
    [loginWithEmailAndPassword.rejected.type]: (state, action: any) => {
      state.loading = false
      switch (action.error.code) {
        case 'auth/user-not-found':
          state.error = LoginError.USER_NOT_FOUND
          break
        case 'auth/wrong-password':
          state.error = LoginError.WRONG_PASSWORD
          break
        case 'auth/too-many-requests':
          state.error = LoginError.TOO_MANY_REQUESTS
          break
        default:
          state.error = LoginError.NO_ERROR
          break
      }
    },
    [loginWithEmailAndPassword.pending.type]: (state) => {
      state.loading = true
    },
    [logout.pending.type]: (state) => {
      state.loading = true
    },
    [initUser.pending.type]: (state) => {
      state.loading = true
    },
    [initUser.fulfilled.type]: (state, action: PayloadAction<UserState>) => {
      state.loading = false
      state.user = action.payload.user
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
      state.roles = action.payload.roles
      state.image = action.payload.image
      state.error = LoginError.NO_ERROR
      state.initialized = true
    },
    [loginWithEmailAndPassword.fulfilled.type]: (
      state,
      action: PayloadAction<UserState>
    ) => {
      state.loading = false
      state.user = action.payload.user
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
      state.roles = action.payload.roles
      state.image = action.payload.image
      state.error = LoginError.NO_ERROR
    },
    [logout.fulfilled.type]: (state) => {
      state.user = null
      state.firstName = ''
      state.lastName = ''
      state.roles = []
      state.image = ''
      state.loading = false
    },
  },
})

export { loginWithEmailAndPassword, logout, initUser }
export const { ignoreError } = userSlice.actions
export const selectUser = (state: RootState) => state.user

export default userSlice.reducer
