import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})

// api
export const dataApi = {
    getData() {
        return instance.get<ResponseType>('/data')
    }
}

// type
export type ResponseType = {
    arrData: DataType[]
    totalCountData: number
    page: number
    pageCount: number
}

export type DataType = {
    id: number,
    date: string,
    title: string,
    quantity: number,
    distance: number
}
