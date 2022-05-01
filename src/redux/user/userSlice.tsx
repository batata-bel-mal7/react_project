import { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'

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

async function fetchUser(): Promise<UserState> {
  const newUser = auth().currentUser
  let state = {} as UserState
  state.loading = false
  state.user = newUser
  const userRef = firestore().collection<User>('users').doc(newUser?.uid)
  const user = (await userRef.get()).data()
  state.firstName = user?.firstName
  state.lastName = user?.lastName
  state.roles = user?.roles
  if (user?.profileImage) {
    const imageRef = storage().ref(`/profileImages/${newUser?.uid}.jpg`)
    state.image = await imageRef.getDownloadURL()
  }
  return state
}

const loginWithEmailAndPassword = createAsyncThunk(
  'user/loginWithEmailAndPassword',
  async ({ email, password }: { email: string; password: string }) => {
      await auth().signInWithEmailAndPassword(email, password)
    return await fetchUser()
  }
)

const logout = createAsyncThunk('user/Logout', async (): Promise<void> => {
  await auth().signOut()
  return
})

const initUser = createAsyncThunk(
  'user/initUser',
  async (): Promise<UserState> => {
    return await fetchUser()
  }
)
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
