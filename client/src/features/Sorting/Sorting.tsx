import React, {ChangeEvent} from 'react';
import styles from "./Sorting.module.css"
import {Select} from "../../common/components/Select/Select";
import {useAppDispatch} from "../../common/hooks/useAppDispatch";
import {useAppSelector} from "../../common/hooks/useAppSelector";
import {
    resetSettingsAC,
    setValueColumnAC,
    setValueConditionAC,
    setValueInputAC, ValueColumnType, ValueConditionType,
} from "./sorting-reducer";

export const Sorting = () => {

    const valueColumn = useAppSelector(state => state.sort.valueColumn)
    const valueCondition = useAppSelector(state => state.sort.valueCondition)
    const valueInput = useAppSelector(state => state.sort.valueInput)
    const dispatch = useAppDispatch()

    const setValueColumnHandler = (value: ValueColumnType) => {
        dispatch(setValueColumnAC(value))
    }

    const setValueConditionHandler = (value: ValueConditionType) => {
        dispatch(setValueConditionAC(value))
    }

    const onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setValueInputAC(e.currentTarget.value))
    }

    const resetSettingsHandler = () => {
        dispatch(resetSettingsAC())
    }

    const disabled = !valueInput || (valueColumn == 'Column selection') || (valueCondition == 'Condition selection')

    return (
        <div className={styles.sorting}>
            <Select
                title={valueColumn}
                array={['Title', 'Quantity', 'Distance']}
                callBack={setValueColumnHandler}
            />
            <Select
                title={valueCondition}
                array={['Equals =', 'Contains...', 'More >', 'Less <']}
                callBack={setValueConditionHandler}
            />
            <input
                value={valueInput}
                onChange={onChangeValueHandler}
            />
            <button
                disabled={disabled}
                onClick={resetSettingsHandler}
            >Reset settings
            </button>
        </div>
    )
}