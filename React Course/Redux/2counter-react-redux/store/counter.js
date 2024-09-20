import { createSlice } from "@reduxjs/toolkit";


const counterslice = createSlice({
  name :'counter',
  initialState :{ counterVal : 0 },
  reducers :{
    increment :(state ,action) =>{
      state.counterVal++;
      
    },
    decrement : (state ,action) =>{
      state.counterVal--;
    },
    addition : (state ,action) =>{
      state.counterVal += Number(action.payload.num);
    },
    sub : (state ,action) =>{
      state.counterVal -= Number(action.payload.num);      
    }
  }
});
export const counteraction = counterslice.actions;
export default counterslice;