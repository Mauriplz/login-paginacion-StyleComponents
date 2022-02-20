import { types } from "../types/types";

const initialState = {
    globalLoading: true,
    loading: false,
    expand : false
}

export const uiReducer = (state = initialState, action) => {
    switch( action.type ){

        case types.uiGlobalLoadingFinish:
            return {
                ...state,
                globalLoading : false
            };

        case types.uiLoadingStart:
            return {
                ...state,
                loading : true,
            };

        case types.uiLoadingFinish:
            return {
                ...state,
                loading: false
            };
        
        case types.uiToogle:
            return {
                ...state,
                expand : action.payload
            };

        default:
            return state;
    }
}