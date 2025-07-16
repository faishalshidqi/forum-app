import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {type UseDispatch, useDispatch, type UseSelector, useSelector} from "react-redux";
import authReducer from "@/states/authUser/reducer.ts";
import loadingReducer from "@/states/loading/reducer.ts";
import usersReducer from "@/states/users/reducer.ts";
import preloadReducer from "@/states/preload/reducer.ts";

/*
interface State {
    auth: {name: string, email: string},
    loading: boolean,
    users: User[],
    preload: boolean,
}
 */

const reducer = combineReducers({
    auth: authReducer,
    loading: loadingReducer,
    users: usersReducer,
    preload: preloadReducer,
})

export const store = configureStore({
    reducer: reducer,
})



//export type RootState = ReturnType<typeof store.getState>
export type RootState = ReturnType<typeof reducer>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: UseSelector<RootState> = useSelector.withTypes<RootState>()
export const useAppDispatch: UseDispatch<AppDispatch> = useDispatch.withTypes<AppDispatch>()
