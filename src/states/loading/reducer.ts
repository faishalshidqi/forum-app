import {LoadingActionType, type LoadingState} from "./action.ts";

export default function loadingReducer(loading: boolean = false, action: LoadingState) {
    switch (action.type) {
        case LoadingActionType.TOGGLE_ACTION:
            return action.payload.loading
        default:
            return loading
    }
}
