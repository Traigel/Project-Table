import React from "react";
import preLoader from "../../../assets/image/loader.gif";
import styles from "./Preloader.module.css"

export function Preloader() {
    return (
        <div className={styles.preloader}>
            <img alt={'preLoader'} src={preLoader}/>
        </div>
    )
}