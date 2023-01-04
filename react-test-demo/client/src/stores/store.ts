import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import reducers from './reducers'

/**
 * creates a Redux store, and also automatically
 * configure the Redux DevTools extension so
 * that you can inspect the store while developing.
 **/
const store = configureStore({
  reducer: reducers
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
