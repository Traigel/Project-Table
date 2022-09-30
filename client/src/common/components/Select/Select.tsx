import React, {useState} from 'react';
import styles from './Select.module.css'

type SelectPropsType = {
    title: string
    array: string[]
}

export const Select = (props: SelectPropsType) => {

    const [collapsed, setCollapsed] = useState<boolean>(false)
    const [title, setTitle] = useState<string>('')

    const collapsedHandler = () => {
        setCollapsed(!collapsed)
    }

    const menuHandler = (title: string) => {
        setTitle(title)
        collapsedHandler()
    }

    return (
        <div className={styles.selectBlock}>
            <div
                onClick={collapsedHandler}
                className={styles.title}
            >{title ? title : props.title} &#8659;</div>
            {collapsed
                ? <div className={styles.menu}>
                    {props.array.map((el, index) => {
                        return (
                            <div
                                key={index}
                                onClick={() => menuHandler(el)}
                            >{el}</div>
                        )
                    })}
                </div>
                : <div></div>
            }

        </div>
    )
}