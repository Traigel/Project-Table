import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunk from "redux-thunk";
import {dataReducer} from "../features/DataTable/data-reducer";
import {sortingReducer} from "../features/Sorting/sorting-reducer";
import {appReducer} from "./app-reducer";

const rootReducer = combineReducers({
    app: appReducer,
    data: dataReducer,
    sort: sortingReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))