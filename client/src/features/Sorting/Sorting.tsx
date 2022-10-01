import React, {ChangeEvent, useEffect, useState} from 'react';
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
import {useDebounce} from "../../common/hooks/useDebounce";
import {getDataTableTC} from "../DataTable/data-reducer";

export const Sorting = () => {

    const valueColumn = useAppSelector(state => state.sort.valueColumn)
    const valueCondition = useAppSelector(state => state.sort.valueCondition)
    const valueInput = useAppSelector(state => state.sort.valueInput)
    const pageCount = useAppSelector(state => state.data.pageCount)
    const dispatch = useAppDispatch()
    const debouncedValue = useDebounce<string>(valueInput, 500)

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
        dispatch(getDataTableTC({page: 1, pageCount: 5}))
    }

    const disabledInput = valueColumn == 'Column selection' || valueCondition == 'Condition selection'
    const disabledButton = !valueInput || disabledInput
    const typeInput = valueColumn === 'Quantity' || valueColumn === 'Distance' ? "number" : "text"

    useEffect(() => {
        if (valueInput !== '') {
            dispatch(getDataTableTC({
                page: 1,
                pageCount,
                search: valueInput,
                column: valueColumn,
                condition: valueCondition
            }))
        }
    }, [debouncedValue, valueCondition, valueCondition])

    return (
        <div className={styles.sorting}>
            <Select
                title={valueColumn}
                array={['Title', 'Quantity', 'Distance']}
                callBack={setValueColumnHandler}
            />
            <Select
                title={valueCondition}
                array={['Equals', 'Contains', 'More', 'Less']}
                callBack={setValueConditionHandler}
            />
            <input
                value={valueInput}
                onChange={onChangeValueHandler}
                disabled={disabledInput}
                type={typeInput}
            />
            <button
                disabled={disabledButton}
                onClick={resetSettingsHandler}
            >Reset settings
            </button>
        </div>
    )
}