import {dateReducer, getDataTableAC, InitialStateDateType} from "./data-reducer";

let state: InitialStateDateType
let getState: InitialStateDateType

beforeEach(() => {
    state = {
        arrData: [],
        totalCountData: 0,
        page: 0,
        pageCount: 0
    }
    getState = {
        arrData: [
            {id: 1, date: '12.02.2022', title: 'ball', quantity: 50, distance: 100},
            {id: 1, date: '20.08.2022', title: 'pencil', quantity: 150, distance: 75},
            {id: 1, date: '03.04.2022', title: 'chair', quantity: 20, distance: 30},
            {id: 1, date: '01.02.2022', title: 'basket', quantity: 95, distance: 120},
            {id: 1, date: '11.09.2022', title: 'pen', quantity: 110, distance: 45},
            {id: 1, date: '10.04.2022', title: 'notebook', quantity: 35, distance: 50},
        ],
        totalCountData: 6,
        page: 1,
        pageCount: 3
    }
})

test('get data table', () => {
    const dateReducerTest = dateReducer(state, getDataTableAC(getState))
    expect(dateReducerTest.arrData.length).toBe(6)
    expect(dateReducerTest.pageCount).toBe(3)
})