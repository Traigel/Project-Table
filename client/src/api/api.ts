import axios from 'axios'
import {ValueColumnType, ValueConditionType} from "../features/Sorting/sorting-reducer";

const instance = axios.create({
    baseURL: 'http://localhost:5000'
})

// api
export const dataApi = {
    getData(data: SortType) {
        if (data.search) {
            return instance.get<ResponseType>('/data', {
                params: {
                    page: data.page,
                    pageCount: data.pageCount,
                    search: data.search,
                    column: data.column,
                    condition: data.condition
                }
            })
        }
        return instance.get<ResponseType>('/data', {
            params: {
                page: data.page,
                pageCount: data.pageCount
            }
        })
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

export type SortType = {
    page: number
    pageCount: number
    search?: string
    column?: ValueColumnType
    condition?: ValueConditionType
}