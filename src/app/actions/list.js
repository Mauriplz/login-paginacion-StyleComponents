import { types } from "../types/types"
import { getFetch } from "../utils/FetchFunctions"

// Hago una petición de los usuarios con una page y un pageSize determinados
export const fetchUserList = (page, pageSize) => {
    return async (dispatch) => {
        const response = await getFetch('users', { page, per_page: pageSize })
        const { total_pages, data: list } = response;
        // Guardo en redux el listado de usuarios de esta página
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