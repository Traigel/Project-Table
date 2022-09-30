import {dataApi, DataType, ResponseType} from "../../api/api";
import {AppThunk} from "../../common/types/types";
import {errorHandlerUtil} from "../../common/utils/errors-utils";

const initialState = {
    arrData: [] as DataType[],
    totalCountData: 0 as number,
    page: 0 as number,
    pageCount: 0 as number
}

export const dateReducer = (state = initialState, action: DataActionType): InitialStateDateType => {
    switch (action.type) {
        case 'DATA/GET-DATA-TABLE':
            return {...action.data}
        default:
            return state
    }
}

// actions
export const getDataTableAC = (data: ResponseType) => {
    return {type: 'DATA/GET-DATA-TABLE', data} as const
}

// thunks
export const getDataTableTC = (): AppThunk => async (dispatch) => {
    try {
        const res = await dataApi.getData()
        dispatch(getDataTableAC(res.data))
    } catch (e) {
        errorHandlerUtil(e, dispatch)
    }
}

// types
export type InitialStateDateType = typeof initialState
export type DataActionType = ReturnType<typeof getDataTableAC>