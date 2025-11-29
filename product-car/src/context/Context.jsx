import { createContext, useState } from "react";
import { products } from "../commponents/Data";

export let Store = createContext()

export const Storeprovider = ({children})=>{
    const [data, setData] = useState(products)
const [cart, setCart] = useState([])
console.log(cart)
    return(
        <Store.Provider value={{data,setData,cart,setCart}}>
            {children}
        </Store.Provider>
    )

}