import { types } from "../types/types";

const intialState = {
    list: [],
    page: 1,
    pageSize: 1,
    totalPages: 1
}

export const listReducer = (state=intialState, action) =>{
    switch(action.type){
        case types.listLoadList:
            return {
                list: action.payload.list,
                page: action.payload.page,
                pageSize: action.payload.pageSize,
                totalPages: action.payload.totalPages
            }
        case types.listCleanList:
            return intialState

        default:
            return state;
    }
}