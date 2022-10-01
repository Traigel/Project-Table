import React, {useEffect} from 'react';
import {useAppSelector} from "../../common/hooks/useAppSelector";
import {useAppDispatch} from "../../common/hooks/useAppDispatch";
import {getDataTableTC} from "./data-reducer";
import styles from "./DataTable.module.css"

export const DataTable = () => {

    const arrData = useAppSelector(state => state.data.arrData)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getDataTableTC({page: 1, pageCount: 5}))
    }, [])

    return (
        <div className={styles.dataTable}>
            {arrData.length === 0
                ?
                <h2 className={styles.notFound}>
                    Nothing was found according to your request.
                </h2>
                :
                <table>
                    <tr>
                        <th>Date</th>
                        <th>Title</th>
                        <th>Quantity</th>
                        <th>Distance</th>
                    </tr>
                    {arrData.map(el => <tr key={el.id}>
                        <td>{el.date}</td>
                        <td>{el.title}</td>
                        <td>{el.quantity}</td>
                        <td>{el.distance}</td>
                    </tr>)}
                </table>
            }
        </div>
    )
}