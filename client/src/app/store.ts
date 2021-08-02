import { configureStore} from '@reduxjs/toolkit';
import countReducer from '../slice/count/countSlice';

export const store = configureStore({
    reducer:{
        counter: countReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
