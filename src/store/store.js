import { configureStore } from "@reduxjs/toolkit";
import pasteReducer from '../redux/reduxSlice.js'
export const store=configureStore({
 reducer:{
    paste : pasteReducer,
 },
    
})