import {PreloadActionType, type PreloadState} from "./action.ts";

export default function preloadReducer(preload: boolean = true, action: PreloadState) {
    switch (action.type) {
        case PreloadActionType.SET_PRELOAD:
            return action.payload.preload
        default:
            return preload
    }
}
