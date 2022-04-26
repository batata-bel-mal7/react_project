import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import networkInfoReducer from './networkInfo/networkInfoSlice'
const createDebugger = require('redux-flipper').default
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    netwrokInfo: networkInfoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    __DEV__
      ? getDefaultMiddleware({ serializableCheck: false }).concat(
          createDebugger()
        )
      : getDefaultMiddleware({
          serializableCheck: false,
        }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
