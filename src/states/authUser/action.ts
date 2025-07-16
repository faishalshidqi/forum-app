import {api} from "../../../utils/api.ts";
import {handleError} from "../handleError.ts";
import {store} from "@/states";
import type {AuthUserAction} from "@/states/authUser/reducer.ts";
import type {Dispatch} from "redux";

export const ActionType  = {
    SET_USER: 'SET_USER',
    UNSET_AUTH_USER: 'UNSET_AUTH_USER'
}
export function setUserActionCreator({email, name}: {email: string, name: string}) {
    return {
        type: ActionType.SET_USER,
        payload: {
            user: {
                email,
                name,
            }
        }
    }
}

export function unsetUserActionCreator() {
    return {
        type: ActionType.UNSET_AUTH_USER,
        payload: {
            user: {
                email: '',
                name: '',
            }
        }
    }
}

export function asyncSetAuthUser({email, password}: {email: string, password: string}) {
    return async (dispatch: Dispatch<AuthUserAction>) => {
        try {
            const {data: {token}} = await api.login({email, password})
            api.putAccessToken(token)
            const {data} = await api.getMyProfile()
            dispatch(setUserActionCreator({email: data.user.email, name: data.user.name}))
            console.log(store.getState())
        } catch (e) {
            handleError(e)
        }
    }
}

export function asyncUnsetAuthUser() {
    return (dispatch: Dispatch<AuthUserAction>) => {
        dispatch(unsetUserActionCreator())
        api.putAccessToken('')
    }
}
