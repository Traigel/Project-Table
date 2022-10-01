import {dataApi, DataType, ResponseType, SortType} from "../../api/api";
import {AppRootStateType, AppThunk} from "../../common/types/types";
import {errorHandlerUtil} from "../../common/utils/errors-utils";
import {setAppStatusAC} from "../../app/app-reducer";

const initialState = {
    arrData: [] as DataType[],
    totalCountData: 0,
    page: 0,
    pageCount: 0
}

export const dataReducer = (state = initialState, action: DataActionType): InitialStateDateType => {
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
export const getDataTableTC = (data: SortType): AppThunk => async (dispatch, getState: () => AppRootStateType) => {
    dispatch(setAppStatusAC('loading'))
    // const page = getState().data.page
    // const pageCount = getState().data.pageCount
    try {
        const res = await dataApi.getData(data)
        dispatch(getDataTableAC(res.data))
    } catch (e) {
        errorHandlerUtil(e, dispatch)
    } finally {
        dispatch(setAppStatusAC('succeeded'))
    }
}

// types
export type InitialStateDateType = typeof initialState
export type DataActionType = ReturnType<typeof getDataTableAC>