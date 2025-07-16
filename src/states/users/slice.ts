import {createSlice} from "@reduxjs/toolkit";
import type {User} from "./action.ts";
import usersReducer from "./reducer.ts";

export const usersSlice = createSlice({
    name: 'users',
    initialState: [] as User[],
    reducers: {
        usersReducer
    }
})