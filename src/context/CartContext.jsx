import { createContext } from "react";
import { useState } from "react";

export const CartContext=createContext();

const CartContextProvider =({children}) => {
    const [count,setCount]=useState(0)
    return (
        <CartContext.Provider value={{count,setCount}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
