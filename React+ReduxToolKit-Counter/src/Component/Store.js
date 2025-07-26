// import { createStore } from 'redux';
import { createSlice } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';

const mode=createSlice({
  name:'mode',
  initialState: {modeState: false},
  reducers:{
    CHANGE_MODE:(state)=>{state.modeState=!state.modeState}
  }
})


const counter=createSlice(
  {
    name: 'counter',
    initialState: {counterValue: 0},
    reducers:{
      INCREMENT:(state)=>{state.counterValue++},
      DECREMENT:(state)=>{state.counterValue--},


      ADD:(state,actions)=>{state.counterValue+=actions.payload.num},

      SUBTRACT:(state,actions)=>{state.counterValue-=actions.payload.num},
    }
  }
  
)



const reduxStore=configureStore({
  reducer:{counter: counter.reducer, mode:mode.reducer}
})
export const CounterReducers=counter.actions;
export const modeReducer=mode.actions;
export default reduxStore;
