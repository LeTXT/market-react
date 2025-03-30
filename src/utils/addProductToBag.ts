import { ProductType } from "../assets/types"
import { initialArray } from "../assets/bagProduct"

export const addProductToBag = (product: ProductType, setQuantity: React.Dispatch<React.SetStateAction<number>>) => {
    const findArray = initialArray.find(item => item.id === product.id)

    if (findArray) {
        if (product.quantity < product.maxQuantity) {
            product.quantity++
        }
        return
    }

    else {
        initialArray.push(product)
        setQuantity(initialArray.length)
    }

}