import React from 'react';
import './App.module.css';
import {DataTable} from "../features/DataTable/DataTable";
import styles from "./App.module.css"
import {Sorting} from "../features/Sorting/Sorting";

export const App = () => {
    return (
        <div className={styles.app}>
            <Sorting/>
            <DataTable/>
        </div>

    )
}