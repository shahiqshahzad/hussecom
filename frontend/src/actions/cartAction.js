import axios from "axios"
import { CART_ADD_ITEM } from "../constants/cartConstants"

export const addToCart = (id) => async(dispatch) =>{
    const {data} = await axios.get(`/d/${id}`)
    dispatch({type:CART_ADD_ITEM , payload:data})

}