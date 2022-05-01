import { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import auth from '@react-native-firebase/auth'

export type UserState = {
  user: FirebaseAuthTypes.User | null
}

const initialState: UserState = {
  user: null,
}

const loginWithEmailAndPassword = createAsyncThunk(
  'user/loginWithEmailAndPasswork',
  async ({
    email,
    password,
  }: {
    email: string
    password: string
  }): Promise<void> => {
    await auth().signInWithEmailAndPassword(email, password)
    return
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
    },
  },
})

export { loginWithEmailAndPassword, logout }
export const { updateUser } = userSlice.actions
export const selectUser = (state: RootState) => state.user

export default userSlice.reducer
