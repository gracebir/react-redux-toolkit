import { createSlice } from '@reduxjs/toolkit';

interface Count{
    value: number
}

const initialState: Count = {
    value: 0
}


const countSlice = createSlice({
    name:'count',
    initialState,
    reducers:{
        incremented(state){
            state.value++;
        }
    }
});

export const { incremented } = countSlice.actions;

export default countSlice.reducer;