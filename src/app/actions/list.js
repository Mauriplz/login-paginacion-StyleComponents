import { types } from "../types/types"
import { getFetch } from "../utils/FetchFunctions"

export const fetchUserList = (page, pageSize) => {
    return async (dispatch) => {
        const response = await getFetch('users', { page, per_page: pageSize })
        const { total_pages, data: list } = response;
        dispatch(loadList({ page, pageSize, totalPages: total_pages, list }))
    }
}

export const loadList = (payload) => ({
    type: types.listLoadList,
    payload: payload
})

export const cleanList = () => ({
    type: types.listCleanList
})