import {createSlice} from "@reduxjs/toolkit";
import loadingReducer from "./reducer.ts";

export const loadingSlice = createSlice({
    name: 'loading',
    initialState: false,
    reducers: {
        loadingReducer
    }
})