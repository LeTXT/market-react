import { useContext } from "react"
import { BagContext } from "../context/BagContext"; 

export const useBag = () => {
    const context = useContext(BagContext)
    if (!context) {
        throw new Error('useBag must be inside a BagProvider')
    }
    return context
}