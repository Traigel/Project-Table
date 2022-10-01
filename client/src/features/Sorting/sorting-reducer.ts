const initialState = {
    valueColumn: 'Column selection' as ValueColumnType,
    valueCondition: 'Condition selection' as ValueConditionType,
    valueInput: ''
}

export const sortingReducer = (state = initialState, action: SortActionType): InitialStateSortType => {
    switch (action.type) {
        case 'SORT/SET-VALUE-COLUMN' :
            return {...state, valueColumn: action.value}
        case "SORT/SET-VALUE-CONDITION":
            return {...state, valueCondition: action.value}
        case "SORT/SET-VALUE-INPUT":
            return {...state, valueInput: action.value}
        case "SORT/RESET-SETTINGS":
            return {...state, valueColumn: 'Column selection', valueCondition: 'Condition selection', valueInput: ''}
        default:
            return state
    }
}

// actions
export const setValueColumnAC = (value: ValueColumnType) => {
    return {type: 'SORT/SET-VALUE-COLUMN', value} as const
}
export const setValueConditionAC = (value: ValueConditionType) => {
    return {type: 'SORT/SET-VALUE-CONDITION', value} as const
}
export const setValueInputAC = (value: string) => {
    return {type: 'SORT/SET-VALUE-INPUT', value} as const
}
export const resetSettingsAC = () => {
    return {type: 'SORT/RESET-SETTINGS'} as const
}

// types
export type InitialStateSortType = typeof initialState
export type SortActionType =
    | ReturnType<typeof setValueColumnAC>
    | ReturnType<typeof setValueConditionAC>
    | ReturnType<typeof setValueInputAC>
    | ReturnType<typeof resetSettingsAC>
export type ValueColumnType = 'Column selection' | 'Title' | 'Quantity' | 'Distance'
export type ValueConditionType = 'Condition selection' | 'Equals' | 'Contains' | 'More' | 'Less'