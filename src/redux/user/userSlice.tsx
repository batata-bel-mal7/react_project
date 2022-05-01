import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export type role = 'admin' | 'user'
export type bankCard = {
  cardNumber: string
  cardHolder: string | null
  cardExpiration: string | null
}
export type UserState = {
  name: string | null
  email: string | null
  isLoggedIn: boolean
}

const initialState: UserState = {
  // todo add missing fields from firebase
  name: null,
  email: null,
  isLoggedIn: false,
}

const loginWithEmailAndPassword = createAsyncThunk(
  'user/loginWithEmailAndPasswork',
  async ({
    email,
    password,
  }: {
    email: string
    password: string
  }): Promise<UserState> => {
    const user = {
      name: password,
      email: email,
      isLoggedIn: true,
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(user)
      }, 2000)
    })
  }
)

const logout = createAsyncThunk('user/Logout', async (): Promise<UserState> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(initialState)
    }, 2000)
  })
})
export const userSlice = createSlice({
  name: 'networkInfo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        loginWithEmailAndPassword.fulfilled,
        (state, action: PayloadAction<UserState>) => {
          state.name = action.payload.name
          state.email = action.payload.email
          state.isLoggedIn = action.payload.isLoggedIn
        }
      )
      .addCase(logout.fulfilled, (state, action: PayloadAction<UserState>) => {
        state.name = action.payload.name
        state.email = action.payload.email
        state.isLoggedIn = action.payload.isLoggedIn
      })
  },
})

export { loginWithEmailAndPassword, logout }
export const selectUser = (state: RootState) => state.user

export default userSlice.reducer
