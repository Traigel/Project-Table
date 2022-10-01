import React from 'react';
import './App.module.css';
import {DataTable} from "../features/DataTable/DataTable";
import styles from "./App.module.css"
import {Sorting} from "../features/Sorting/Sorting";
import {Preloader} from "../common/components/Preloader/Preloader";
import {useAppSelector} from "../common/hooks/useAppSelector";
import {Pagination} from "../features/Pagination/Pagination";

export const App = () => {

    const status = useAppSelector(state => state.app.status)

    return (
        <div className={styles.app}>
            {status === 'loading' && <Preloader/>}
            <Sorting/>
            <DataTable/>
            <Pagination/>
        </div>
    )
}