import axios, { Axios, AxiosRequestConfig } from "axios";
import { APIResponse } from "../types/commonResponse";

//axios 인스턴스 생성 
const client: Axios = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {
        'Content-Type' : 'application/json',
    }
});

//GET 메서드
export const getData = async <T> (url: string, config?: AxiosRequestConfig): Promise<APIResponse<T>> => {
    try {
        const response = await client.get<APIResponse<T>>(url,config);
        return response.data;
    } catch (error: any) {
        throw new Error(error.message);
    }
};