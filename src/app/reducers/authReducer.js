import { types } from "../types/types"

export const authReducer = (state = {}, action) => {
    switch (action.type) {

        case types.authLogin:
            return {
                ...action.payload
            }
        case types.authLoginGoogle:
            return {
                token : action.payload.uid
            }
        case types.authLogout:
            return {}

        default:
            return state
    }
}