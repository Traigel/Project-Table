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
    const dispatch = useAppDispatch()

    const onClickPageHandler = (page: number) => {
        dispatch(getDataTableTC({page, pageCount}))
    }

    const callBackSelectHandler = (pageCount: number) => {
        dispatch(getDataTableTC({page: 1, pageCount: pageCount}))
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