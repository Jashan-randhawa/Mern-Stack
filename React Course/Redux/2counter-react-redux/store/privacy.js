import { createSlice } from "@reduxjs/toolkit";

const privacyslice = createSlice({
  name :'privacy',
  initialState : false,
  reducers :{
    toggle :(state) =>{
     return state=!state;
    }
  }
});

export const privacyaction = privacyslice.actions;
export default privacyslice;