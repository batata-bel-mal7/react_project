import { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import auth from '@react-native-firebase/auth'

export enum LoginError {
  NO_ERROR = 0,
  USER_NOT_FOUND = 'auth/user-not-found',
  WRONG_PASSWORD = 'auth/wrong-password',
  TOO_MANY_REQUESTS = 'auth/too-many-requests',
}

export type role = 'seller' | 'customer'

export interface User {
  firstName: string
  lastName: string
  profileImage: number
  roles: role[]
}

export type UserState = {
  user: FirebaseAuthTypes.User | null
  firstName?: string
  lastName?: string
  roles?: role[]
  image?: string
  loading: boolean
  error: LoginError
}

const initialState: UserState = {
  user: null,
  loading: false,
  error: LoginError.NO_ERROR,
}

const loginWithEmailAndPassword = createAsyncThunk(
  'user/loginWithEmailAndPasswork',
  async ({
    email,
    password,
  }: {
    email: string
    password: string
  }): Promise<{ error: any }> => {
    try {
      await auth().signInWithEmailAndPassword(email, password)
      return { error: null }
    } catch (error) {
      return { error }
    }
  }
)

const logout = createAsyncThunk('user/Logout', async (): Promise<void> => {
  await auth().signOut()
  return
})

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state) => {
      state.user = auth().currentUser
      state.loading = false
    },
  },
  extraReducers: {
    [loginWithEmailAndPassword.pending.type]: (state) => {
      state.loading = true
    },
    [loginWithEmailAndPassword.fulfilled.type]: (state, action) => {
      state.loading = false
      state.error = action.payload.error
        ? (action.payload.error.code as LoginError)
        : LoginError.NO_ERROR
    },
  },
})

export { loginWithEmailAndPassword, logout }
export const { updateUser } = userSlice.actions
export const selectUser = (state: RootState) => state.user

export default userSlice.reducer
