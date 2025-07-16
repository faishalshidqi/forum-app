import {api} from "../../../utils/api.ts";
import {setUserActionCreator} from "../authUser/action.ts";

export type PreloadState = {
    type: string,
    payload: {
        preload: boolean
    }
}

export const PreloadActionType = {
    SET_PRELOAD: 'SET_PRELOAD',
}

export function setPreloadActionCreator(preload: boolean): PreloadState {
    return {
        type: PreloadActionType.SET_PRELOAD,
        payload: {
            preload
        }
    }
}

export function asyncPreloadProcess() {
    return async (dispatch: (arg0: { type: string; payload: { user: { email: string; name: string; }; } | { preload: boolean; }; }) => void) => {
        try {
            const {data} = await api.getMyProfile()
            dispatch(setUserActionCreator({name: data.user.name, email: data.user.email}))
        } catch {
            dispatch(setUserActionCreator({email: '', name: ''}))
        } finally {
            dispatch(setPreloadActionCreator(false))
        }
    }
}
