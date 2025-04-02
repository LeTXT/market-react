interface PriceOption {
    id: number;
    grams: number;
    price: number;
    availableStock: number;
  }

export interface ProductType {
    id: number;
    img: string;
    title: string;
    description: string;
    quantity: number;
    priceOptions: PriceOption[];
    tag: string[];
    selectedWeight?: number;
    selectedPrice?: number;
    cardBagId?: number
    availableStock?: number
}

export interface ProductBagType {
    cardBagId: number;
    
    id: number;
    title: string;
    img: string;
    selectedPrice: number;
    selectedWeight: number;
    availableStock: number;
    quantity: number;
    // id: number;
    // img: string;
    // title: string;
    // description: string;
    // quantity: number;
    // priceOptions: PriceOption[];
    // tag: string[];
    // selectedWeight?: number;
    // selectedPrice?: number;
    // cardBagId?: number
    // availableStock?: number
}