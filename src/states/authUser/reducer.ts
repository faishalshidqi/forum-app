import {ActionType} from "@/states/authUser/action.ts";

interface setAuthUser {
    type: typeof ActionType.SET_USER,
    payload: {
        user: {
            email: string,
            name: string,
        }
    }
}

interface unsetAuthUser {
    type: typeof ActionType.UNSET_AUTH_USER,
    payload: {
        user: {
            email: string,
            name: string,
        }
    }
}

export type AuthUserAction = setAuthUser | unsetAuthUser

export default function authReducer(user = {name: '', email: ''}, action: AuthUserAction): {name: string, email: string} {
    switch (action.type) {
        case ActionType.SET_USER:
            return action.payload.user;
        case ActionType.UNSET_AUTH_USER:
        {
            return {email: '', name: ''}
        }
        default:
            return user
    }
}
