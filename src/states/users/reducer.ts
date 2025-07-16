import {ActionType, type FetchedUsers, type User} from "./action.ts";

export default function usersReducer(users: User[] = [], action: FetchedUsers): User[] {
    switch (action.type) {
        case ActionType.GET_USERS:
            return action.payload.users
        default:
            return users
    }
}
