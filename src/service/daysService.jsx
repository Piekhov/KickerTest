import { AxiosResponse } from "axios";
import axios from "axios";


export const daysAPI = async (year) => {
    return await instance.get(`http://127.0.0.1:5001/api/task/user-day/year?year=2022`);
 }

export const instance = axios.create({
    baseURL: daysAPI,
    headers: {'Authorization': 'bearer: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ItCS0L7Qu9C-0LTQuNC80LjRgCIsImVtYWlsIjoidmwucGVob3ZAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpc0FjdGl2YXRlZCI6dHJ1ZSwiaWF0IjoxNjU2NDE5MjEzLCJleHAiOjE2NTY0MjY0MTN9.ReyyTJRh0N2M5ef3HngE_Jb21n-CnrHhtGGqWZjv1wA'}
  });

