import axios from "axios"
import { axiosJWT } from "./UserService"

export const getAllProduct = async (search, limit) => {
    let res = {}
    if (search?.length > 0) {
        res = await axios.get(`http://localhost:3001/api/product/get-all?filter=name&filter=${search}&limit=${limit}`)
    } else {
        
        res = await axios.get(`http://localhost:3001/api/product/get-all?limit=${limit}`)
        console.log('ser',res.data)
    
    }
    
    return res.data
}


export const getProductType = async (type, page, limit) => {
    if (type) {
        const res = await axios.get(`http://localhost:3001/api/product/get-all?filter=type&filter=${type}&limit=${limit}&page=${page}`)
        console.log('type',type,`http://localhost:3001/api/product/get-all?filter=type=${type}&limit=${limit}&page=${page}`)
        return res.data

    }
}

export const createProduct = async (data) => {
    const res = await axios.post(`http://localhost:3001/api/product/create`, data)
    return res.data
}

export const getDetailsProduct = async (id) => {
    const res = await axios.get(`http://localhost:3001/api/product/get-details/${id}`)
    return res.data
}


export const getAllTypeProduct = async () => {
    const res = await axios.get(`http://localhost:3001/api/product/get-all-type`)
    return res.data
}