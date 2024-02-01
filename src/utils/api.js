import axios from "axios"
const api = axios.create({baseURL:"https://dummyjson.com"})

export const login= async(data, cb)=>{
    try {
        const res= await api.post("/auth/login", data)
        console.log(res);
        cb(res.data)
    } catch (error) {
        cb(error?.response?.data?.message , true)
        console.log(error)
    }
}