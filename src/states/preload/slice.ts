import {createSlice} from "@reduxjs/toolkit";
import preloadReducer from "./reducer.ts";

export const preloadSlice = createSlice({
    name: 'preload',
    initialState: false,
    reducers: {
        preloadReducer
    }
})
