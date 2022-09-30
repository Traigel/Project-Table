import {
    InitialStateSortType, resetSettingsAC,
    setValueColumnAC,
    setValueConditionAC,
    setValueInputAC,
    sortingReducer
} from "./sorting-reducer";

let state: InitialStateSortType
let resState: InitialStateSortType

beforeEach(() => {
    state = {
        valueColumn: 'Column selection',
        valueCondition: 'Condition selection',
        valueInput: ''
    }
    resState = {
        valueColumn: 'Distance',
        valueCondition: 'Less <',
        valueInput: 'Hello'
    }
})

test('set value column', () => {
    const dateReducerTest = sortingReducer(state, setValueColumnAC('Title'))
    expect(dateReducerTest.valueColumn).toBe('Title')
})
test('set value condition', () => {
    const dateReducerTest = sortingReducer(state, setValueConditionAC('More >'))
    expect(dateReducerTest.valueCondition).toBe('More >')
})
test('set value input', () => {
    const dateReducerTest = sortingReducer(state, setValueInputAC('Hello!!!'))
    expect(dateReducerTest.valueInput).toBe('Hello!!!')
})
test('reset settings', () => {
    const dateReducerTest = sortingReducer(resState, resetSettingsAC())
    expect(dateReducerTest.valueColumn).toBe('Column selection')
    expect(dateReducerTest.valueCondition).toBe('Condition selection')
    expect(dateReducerTest.valueInput).toBe('')
})
