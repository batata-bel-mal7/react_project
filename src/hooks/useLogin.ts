import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../redux/user/userSlice'
import {
  loginWithEmailAndPassword as loginWithEmailAndPasswordEvent,
  logout as logoutEvent,
  ignoreError as ignoreErrorEvent,
} from '../redux/user/userSlice'

const useLogin = () => {
  const user = useSelector(selectUser)
  const loading = user.loading
  const error = user.error
  const appDispatch = useDispatch()

  const loginWithEmailAndPassword = (email: string, password: string) => {
    appDispatch(loginWithEmailAndPasswordEvent({ email, password }) as any)
  }

  const logout = () => {
    appDispatch(logoutEvent() as any)
  }
  const ignoreError = () => {
    appDispatch(ignoreErrorEvent())
  }

  return {
    loginWithEmailAndPassword,
    logout,
    loading,
    error,
    user,
    ignoreError,
  }
}

export default useLogin
