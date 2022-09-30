import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunk from "redux-thunk";
import {dateReducer} from "../features/DataTable/data-reducer";
import {sortingReducer} from "../features/Sorting/sorting-reducer";

const rootReducer = combineReducers({
    data: dateReducer,
    sort: sortingReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))