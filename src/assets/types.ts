export interface ProductType {
    id: number
    title: string
    price: number
    img: string
    quantity: number
    maxQuantity: number
    gramOptions: number[]
    tag: string[]
    selectedWeight?: number
}
