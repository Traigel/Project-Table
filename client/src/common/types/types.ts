import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {store} from "../../app/store";
import {DataActionType} from "../../features/DataTable/data-reducer";
import {SortActionType} from "../../features/Sorting/sorting-reducer";

// type state
export type AppRootStateType = ReturnType<typeof store.getState>

// type action
export type AppRootActionsType = DataActionType | SortActionType

// type dispatch
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AppRootActionsType>

// type thunks
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppRootActionsType>