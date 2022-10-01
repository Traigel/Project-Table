import React from 'react';
import {useAppSelector} from "../../common/hooks/useAppSelector";
import {useAppDispatch} from "../../common/hooks/useAppDispatch";
import styles from "./Pagination.module.css"
import {Select} from "../../common/components/Select/Select";
import {getDataTableTC} from "../DataTable/data-reducer";

export const Pagination = () => {

    const totalCountData = useAppSelector(state => state.data.totalCountData)
    const page = useAppSelector(state => state.data.page)
    const pageCount = useAppSelector(state => state.data.pageCount)
    const valueColumn = useAppSelector(state => state.sort.valueColumn)
    const valueCondition = useAppSelector(state => state.sort.valueCondition)
    const valueInput = useAppSelector(state => state.sort.valueInput)
    const status = useAppSelector(state => state.app.status)
    const dispatch = useAppDispatch()

    const onClickPageHandler = (pageValue: number) => {
        if (status === 'succeeded') {
            if (valueInput !== '') {
                dispatch(getDataTableTC({
                    page: pageValue,
                    pageCount,
                    search: valueInput,
                    column: valueColumn,
                    condition: valueCondition
                }))
            } else {
                dispatch(getDataTableTC({page: pageValue, pageCount}))
            }
        }
    }

    const callBackSelectHandler = (pageCountValue: number) => {
        if (valueInput !== '') {
            dispatch(getDataTableTC({
                page: 1,
                pageCount: pageCountValue,
                search: valueInput,
                column: valueColumn,
                condition: valueCondition
            }))
        } else {
            dispatch(getDataTableTC({page: 1, pageCount: pageCountValue}))
        }
    }

    const pagesCount = Math.ceil(totalCountData / pageCount)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={styles.pagination}>
            {pages.map((el, index) => {
                return (
                    <span
                        key={index}
                        className={el === page ? styles.active : ''}
                        onClick={() => onClickPageHandler(el)}
                    >
                        {el}
                    </span>
                )
            })}
            <Select
                title={pageCount}
                array={[5, 10, 20]}
                callBack={callBackSelectHandler}
                classNameTitle={styles.title}
                classNameMenu={styles.menu}
            />
        </div>
    )
}