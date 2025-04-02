import { createContext } from "react"
import { ProductType, ProductBagType } from "../assets/types"

interface BagContextType {
    bagItems: ProductBagType[];
    addToBag: (product: ProductType) => void;
    removeFromBag: (productId: number) => void;
    updateQuantity: (productId: number, newQuantity: number) => void;
    clearBag: () => void;
    getTotalPrice: () => number;
}

// const defaultBagContext: BagContextType = {
//     bagItems: [],
//     addToBag: () => {},
//     removeFromBag: () => {},
//     updateQuantity: () => {},
//     clearBag: () => {},
//     getTotalPrice: () => 0,
//   };
  
export const BagContext = createContext<BagContextType | null>(null);
