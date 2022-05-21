import { LoginError, UserState } from '../redux/user/userSlice'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'
import { User } from '../../types'

async function fetchUser(): Promise<UserState> {
  const newUser = auth().currentUser
  if (!newUser) {
    return {
      user: null,
      loading: false,
      error: LoginError.NO_ERROR,
      initialized: false,
    }
  }
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

const signInWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<UserState> => {
  console.log('signInWithEmailAndPassword', email, password)
  await auth().signInWithEmailAndPassword(email, password)
  return fetchUser()
}

const signOut = async (): Promise<UserState> => {
  await auth().signOut()
  return fetchUser()
}

export default { fetchUser, signInWithEmailAndPassword, signOut }
