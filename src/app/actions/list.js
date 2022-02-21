import { types } from "../types/types"
import { getFetch } from "../utils/FetchFunctions"

// Hago una petición de los usuarios con una page y un pageSize determinados
export const fetchUserList = (page, pageSize) => {
    return async (dispatch) => {
        //Utilizo la funcion getFetch para hacer un fetch( method:GET)
        const response = await getFetch('users', { page, per_page: pageSize })
        const { total_pages, data: list } = response;
        // Guardo en redux el listado de usuarios de esta página
        dispatch(loadList({ page, pageSize, totalPages: total_pages, list }))
    }
}

//Carga el Redux la lista con la paginacion
export const loadList = (payload) => ({
    type: types.listLoadList,
    payload: payload
});

//Limpia la lista y la paginacion
export const cleanList = () => ({
    type: types.listCleanList
});