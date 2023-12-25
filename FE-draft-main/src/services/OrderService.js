import { axiosJWT } from "./UserService"
import axios from "axios"

export const createOrder = async (data) => {
  try{
  const res = await axios.post(`http://localhost:3001/api/order/create`, data, )
  console.log('res',data)
  return res.data}
  catch(error){
  console.error('e',error);
    throw error;}
}



