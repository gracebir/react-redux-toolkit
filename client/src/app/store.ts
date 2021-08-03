import { configureStore} from '@reduxjs/toolkit';
import countReducer from '../slice/count/countSlice';
import { apiSlice } from '../slice/todos/todoSlice';

export const store = configureStore({
    reducer:{
        counter: countReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware:(getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(apiSlice.middleware);
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
