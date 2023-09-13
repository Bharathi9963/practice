import {createSlice} from '@reduxjs/toolkit'
const initialState={
    counter:0
}
const CounterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state,action)=>{state.counter=state.counter+1},
        decrement:(state,action)=>{state.counter=state.counter-1}
    }
})
export const {increment,decrement}=CounterSlice.actions
export default CounterSlice.reducer