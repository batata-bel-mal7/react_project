import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../redux/user/userSlice'
import {
  loginWithEmailAndPassword as loginWithEmailAndPasswordEvent,
  logout as logoutEvent,
} from '../redux/user/userSlice'

const useLogin = () => {
  const user = useSelector(selectUser)
  const loading = user.loading
  const appDispatch = useDispatch()

  const loginWithEmailAndPassword = (email: string, password: string) => {
    appDispatch(loginWithEmailAndPasswordEvent({ email, password }) as any)
  }

  const logout = () => {
    appDispatch(logoutEvent() as any)
  }

  return { loginWithEmailAndPassword, logout, loading, user }
}

export default useLogin
