import {api} from "../../../utils/api.ts";
import {handleError} from "../handleError.ts";

export type User = {
    email: string,
    name: string,
    password: string
}

export type FetchedUsers = {
    type: string,
    payload: {
        users: User[]
    }
}

export const ActionType = {
    GET_USERS: 'GET_USERS',
}

export function getUsersActionCreator(users: User[]): FetchedUsers {
    return {
        type: ActionType.GET_USERS,
        payload: {
            users
        }
    }
}

export function asyncRegisterUser({email, name, password}: { email: string, name: string, password: string }) {
    return async () => {
        //dispatch(showLoading())
        try {
            await api.register({email, name, password})
        } catch (e) {
            handleError(e)
        }
        //dispatch(hideLoading())
    }
}
