import { configureStore} from '@reduxjs/toolkit';
import loanReducer from '../app/slice/loanSlice';

export const store = configureStore({
  reducer: {
    loan: loanReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;