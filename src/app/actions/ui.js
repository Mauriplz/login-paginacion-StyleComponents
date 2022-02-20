import { types } from "../types/types";

export const finishGlobalLoading = () =>({
    type : types.uiGlobalLoadingFinish
})

export const startLoading = () =>({
    type : types.uiLoadingStart
})

export const finishLoading = () => ({
    type : types.uiLoadingFinish
})

export const expandToogle = (payload) =>({
    type : types.uiToogle,
    payload : payload
})