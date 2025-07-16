export type LoadingState = {
    type: string,
    payload: {
        loading: boolean
    }
}

export const LoadingActionType = {
    TOGGLE_ACTION: 'TOGGLE_ACTION'
}

export function toggleLoadingActionCreator(loading: boolean): LoadingState {
    return {
        type: LoadingActionType.TOGGLE_ACTION,
        payload: {
            loading
        }
    }
}
