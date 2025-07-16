import {api} from "../../../utils/api.ts";
import {handleError} from "../handleError.ts";
import type {AuthUserAction} from "@/states/authUser/reducer.ts";
import type {Dispatch} from "redux";

export const ActionType  = {
    SET_USER: 'SET_USER',
    UNSET_AUTH_USER: 'UNSET_AUTH_USER'
}
export function setUserActionCreator({email, name, id, avatar}: {email: string, name: string, id: string, avatar: string}) {
    return {
        type: ActionType.SET_USER,
        payload: {
            user: {
                email,
                name,
                id,
                avatar
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
                avatar: '',
                id: ''
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
            dispatch(setUserActionCreator({...data.user}))
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
