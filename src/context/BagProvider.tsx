import { useState, ReactNode } from "react"
import { BagContext } from "./BagContext"
import { ProductType, ProductBagType } from "../assets/types"

export const BagProvider = ({ children }: { children: ReactNode }) => {
    const [bagItems, setBagItems] = useState<ProductBagType[]>([])

    const addToBag = (product: ProductType) => {
        console.log(product);
        

        setBagItems(prevBagItems => {
            const existingItemIndex = prevBagItems.findIndex((item) =>
                item.id === product.id && item.selectedWeight === product.selectedWeight
            );

            if (existingItemIndex !== -1) {

                const updatedBagItems = [...prevBagItems]
                const existingItem = updatedBagItems[existingItemIndex]

                if (existingItem.quantity < existingItem.availableStock) {
                    updatedBagItems[existingItemIndex] = {
                        ...existingItem,
                        quantity: existingItem.quantity + 1
                    }
                    return prevBagItems
                } else {
                    return prevBagItems
                }
            } else {
                return [...prevBagItems, {
                    cardBagId: product.id + (product.priceOptions.find(option => option.price === product.selectedPrice)?.grams || 0),

                    id: product.id,
                    title: product.title,
                    img: product.img,

                    selectedPrice: product.selectedPrice,
                    selectedWeight: product.selectedWeight,
                    availableStock: product.priceOptions.find(option => option.price === product.selectedPrice)?.availableStock || 0,
                    quantity: (product.quantity || 1)
                }]
                // return [...prevBagItems, { ...product, quantity: 1 }]
            }
        })
    }

    const removeFromBag = (productId: number) => {
        setBagItems((prevBagItems) =>
            prevBagItems.filter((item) => item.cardBagId !== productId)
        )
    }

    const updateQuantity = (productId: number, newQuantity: number) => {
        setBagItems((prevBagItems) =>
            prevBagItems.map((item) =>
                item.cardBagId === productId
                    ? { ...item, quantity: newQuantity }
                    : item
            )
        )
    }

    const clearBag = () => {
        setBagItems([])
    }

    const getTotalPrice = () => {
        return bagItems?.reduce((total, item) =>
            total + ((item?.selectedPrice || 0) * (item?.quantity || 1)), 0
        ) || 0;
    }


    return (
        <BagContext.Provider value={{ bagItems, addToBag, removeFromBag, updateQuantity, clearBag, getTotalPrice }}>
            {children}
        </BagContext.Provider>

    )
}