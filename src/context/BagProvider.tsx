import { useState, ReactNode } from "react"
import { BagContext } from "./BagContext"
import { ProductType } from "../assets/types"

export const BagProvider = ({ children }: {children: ReactNode}) => {
    const [bagItems, setBagItems] = useState<ProductType[]>([])

    const addToBag = (product: ProductType) => {
        console.log(product);
        
        
        setBagItems((prevBagItems) => {
            const existingItem = prevBagItems.find((item) => 
                item.id === product.id && item.selectedWeight === product.selectedWeight
        )

            if (existingItem) {

                return prevBagItems.map((item) => 
                    item.id === product.id && item.quantity < item.maxQuantity
                        ? { ...item, quantity: item.quantity + 1}
                        : item
                )
            } else {
                return [...prevBagItems, {...product, quantity: 1}]
            }
        })
    }

    const removeFromBag = (productId: number) => {
        setBagItems((prevBagItems) => 
            prevBagItems.filter((item) => item.id !== productId)
        )  
    }

    const updateQuantity = (productId: number, newQuantity: number) => {
        setBagItems((prevBagItems) => 
            prevBagItems.map((item) => 
                item.id === productId
                    ? { ...item, quantity: newQuantity } 
                    : item
            )
        )
    }

    const clearBag = () => {
        setBagItems([])
    }

    const getTotalPrice = () => {
        return bagItems.reduce((total, item) => total + item.price * item.quantity, 0)
    }
    

    return (
        <BagContext.Provider value={{ bagItems, addToBag, removeFromBag, updateQuantity, clearBag, getTotalPrice }}>
            {children}
        </BagContext.Provider>
        
    ) 
}