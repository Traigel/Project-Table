import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunk from "redux-thunk";
import {dateReducer} from "../features/DataTable/data-reducer";

const rootReducer = combineReducers({
    data: dateReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))