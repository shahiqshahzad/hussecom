import { CART_ADD_ITEM } from "../constants/cartConstants";

export const cartAddReducer = (state={cartItems:[]},action) =>{
    switch(action.type){
        case CART_ADD_ITEM:
            const item = action.payload
            const existItem = state.cartItems.find((x) => x.product === item.product)
            console.log(existItem)
        //     const ch = state.cartItems.map((x) =>
        //     x.product === existItem.product ? item : x
        //   )
         return {
          
         }
            // return {
            //     cartItems: [...state.cartItems,action.payload],
            //   }
        default:
            return state
    }
}