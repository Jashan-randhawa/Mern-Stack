import {configureStore, createSlice} from '@reduxjs/toolkit';
import counterslice from './counter';
import privacyslice from './privacy';

const counterstore = configureStore({
  reducer :{
    counter : counterslice.reducer,
    privacy : privacyslice.reducer
  }
});
export default counterstore;