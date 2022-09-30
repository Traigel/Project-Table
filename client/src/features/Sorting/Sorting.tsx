import React from 'react';
import styles from "./Sorting.module.css"
import {Select} from "../../common/components/Select/Select";

export const Sorting = () => {

    return (
        <div className={styles.sorting}>
            <Select
                title={'Speaker selection'}
                array={['Title', 'Quantity', 'Distance']}
            />
            <Select
                title={'Condition selection'}
                array={['Equals =', 'Contains', 'More >', 'Less <']}
            />
            <input/>
        </div>
    )
}