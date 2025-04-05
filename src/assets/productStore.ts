import { ProductType } from "./types"

export const allProducts: ProductType[] = [
    {
        id: 1,
        img: "/market-react/coffee.png",
        title: "Café Real Coffee Tradicional Grão",
        description: `<p>O Real Coffee é um café especial, produzido com grãos 100% arábica cultivados em altitudes elevadas, garantindo um perfil sensorial refinado e autêntico.</p>
        <p>Selecionamos cuidadosamente os grãos e utilizamos um processo de torra artesanal para realçar suas características naturais, resultando em uma bebida equilibrada e envolvente.</p>
        <p>Com notas de chocolate e caramelo, complementadas por uma acidez vibrante e um toque floral sutil, nosso café oferece uma experiência sensorial rica e harmoniosa.</p>`,
        quantity: 1,
        priceOptions: [
            { id: 1, grams: 250, price: 24.90, availableStock: 5 },
            { id: 2, grams: 500, price: 36.90, availableStock: 3 },
            { id: 3, grams: 750, price: 49.90, availableStock: 2 },
            { id: 4, grams: 1000, price: 64.90, availableStock: 4 }
        ],
        tag: ["emphasis"]
    },
    {
        id: 2,
        img: "/market-react//coffee.png",
        title: "Café Real Coffee Tradicional Moído",
        description: "Café moído de alta qualidade, perfeito para um café encorpado e equilibrado.",
        quantity: 1,
        priceOptions: [
            { id: 1, grams: 250, price: 24.90 , availableStock: 5 },
            { id: 2, grams: 500, price: 36.90 , availableStock: 3 },
            { id: 3, grams: 750, price: 49.90 , availableStock: 6 },
            { id: 4, grams: 1000, price: 64.90 , availableStock: 1 }
        ],
        tag: ["emphasis", "sale"]
    },
    {
        id: 3,
        img: "/market-react//coffee.png",
        title: "Café Real Coffee Tradicional Torrado e Moído Aroma de Caramelo",
        description: "Uma seleção especial de grãos torrados com notas suaves de caramelo, ideal para paladares refinados.",
        quantity: 1,
        priceOptions: [
            { id: 1, grams: 250, price: 25.90, availableStock: 5 },
            { id: 2, grams: 500, price: 38.90, availableStock: 3 },
            { id: 3, grams: 750, price: 52.90, availableStock: 7 },
            { id: 4, grams: 1000, price: 68.90, availableStock: 4 }
        ],
        tag: ["emphasis", "sale"]
    },
    {
        id: 4,
        img: "/market-react//coffee.png",
        title: "Café Real Coffee Extra Forte Moído",
        description: "Um café encorpado e intenso, para quem gosta de um sabor mais forte e marcante.",
        quantity: 1,
        priceOptions: [
            { id: 1, grams: 250, price: 23.90, availableStock: 5 },
            { id: 2, grams: 500, price: 35.90, availableStock: 4 },
            { id: 3, grams: 750, price: 47.90, availableStock: 3 },
            { id: 4, grams: 1000, price: 62.90, availableStock: 7 }
        ],
        tag: ["emphasis", "sale"]
    },
    {
        id: 5,
        img: "/market-react//coffee.png",
        title: "Café Real Coffee Extra Forte Moído",
        description: "O mesmo café extra forte, mas em uma embalagem promocional especial.",
        quantity: 1,
        priceOptions: [
            { id: 1, grams: 250, price: 22.90, availableStock: 5 },
            { id: 2, grams: 500, price: 33.90, availableStock: 6 },
            { id: 3, grams: 750, price: 45.90, availableStock: 3 },
            { id: 4, grams: 1000, price: 59.90, availableStock: 2 }
        ],
        tag: ["sale"]
    }
]
