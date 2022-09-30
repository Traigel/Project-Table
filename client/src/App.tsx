import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";

type DateType = {
    id: number,
    date: string,
    title: string,
    quantity: number,
    distance: number
}

type DataResponseType = {
    arrData: DateType[]
    totalCountData: number
    page: number
    pageCount: number
}

function App() {

    const [data, setData] = useState<DateType[]>([])

    const getData = () => {
        axios.get<DataResponseType>('http://localhost:5000/data')
            .then(res => {
                setData(res.data.arrData)
            })
    }

    useEffect(() => {
        getData()
    }, [])

    return (

        <div className="App">
            {data.map(el => <div key={el.id}><span>{el.date}, {el.title}, {el.quantity}</span></div>)}
        </div>
    );
}

export default App;
