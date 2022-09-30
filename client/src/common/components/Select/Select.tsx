import React, {useState} from 'react';
import styles from './Select.module.css'
import {ValueSortType} from "../../../features/Sorting/sorting-reducer";

type SelectPropsType = {
    title: ValueSortType
    array: ValueSortType[]
    callBack: (title: ValueSortType) => void
}

export const Select = (props: SelectPropsType) => {

    const [visibility, setVisibility] = useState<boolean>(false)

    const visibilityHandler = () => {
        setVisibility(!visibility)
    }

    const menuHandler = (title: ValueSortType) => {
        props.callBack(title)
        visibilityHandler()
    }

    return (
        <div className={styles.selectBlock}>
            <div
                onClick={visibilityHandler}
                className={styles.title}
            >
                {props.title} {visibility ? <span>&#215;</span> : <span>&#8659;</span>}
            </div>
            {visibility
                ? <div className={styles.menu}>
                    {props.array.map((el, index) => {
                        return (
                            <div
                                key={index}
                                onClick={() => menuHandler(el)}
                                className={styles.active}
                            >{el}</div>
                        )
                    })}
                </div>
                : <div></div>
            }
        </div>
    )
}