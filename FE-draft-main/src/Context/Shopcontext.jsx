import React, { createContext, useState } from 'react'
import { normal } from "../data";
export const Shopcontext = createContext(null)

const getDefaultCart=()=>{
        let cart={}
        for (let index = 0; index < normal.length+1; index++) {
            cart[index]=0
            
        }
        return cart
    }

const  ShopcontextProvider=(props)=>{
    const [cartItems,setCartItems]=useState(getDefaultCart)
    

    const addToCart=(itemID)=>{
setCartItems((prev)=>({...prev,[itemID]:prev[itemID]+1}))
console.log(cartItems)
    }

    const removeFromCart=(itemID)=>{
        setCartItems((prev)=>({...prev,[itemID]:prev[itemID]-1}))
            }

    const getTotalCartAmount=()=>{
        let totalAmount=0
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo=normal.find((product)=>product.id===Number(item))
                totalAmount+=itemInfo.price*cartItems[item]
            }
            
        }return totalAmount
    }  
    
    const getTotalCartItems=()=>{
        let totalItem=0
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItem+=cartItems[item]
            }
        }return totalItem
    }

    const contextValue={normal,cartItems,addToCart,removeFromCart,getTotalCartAmount,getTotalCartItems}
    return (
        <Shopcontext.Provider value={contextValue}>
            {props.children}
        </Shopcontext.Provider>
    )
}
export default ShopcontextProvider;