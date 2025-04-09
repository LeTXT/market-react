interface Order {
    id: number;
    quantity: number;
}

interface Product {
    productKey: string;
    orders: Order[];
}


export const array: Product[] = [
    {
    productKey: "abc123",
    orders: [
        {
            id: 1,
            quantity: 2
        },
        {
            id: 2,
            quantity: 3
        },
    ]
    },
    {
        productKey: "abc123",
        orders: [
            {
                id: 1,
                quantity: 2
            },
            {
                id: 2,
                quantity: 3
            },
        ]
        }
]