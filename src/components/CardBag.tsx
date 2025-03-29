import { useEffect, useState } from 'react'

import { IoClose } from "react-icons/io5";

import '../styles/cardBag.scss'

interface Item {
    title: string
    price: number
    img: string
    quantity: number
    maxQuantity: number
}

const initialArray: Item[] = [
    {
        title: "Café Real Coffee Tradicional Grão 500g",
        price: 36.90, 
        img: "./coffee.png",
        quantity: 2,
        maxQuantity: 4
    }, 
    {
        title: "Café Real Coffee Tradicional Grão 500g",
        price: 36.90, 
        img: "./coffee.png",
        quantity: 2,
        maxQuantity: 3
    }, 
    {
        title: "Café Real Coffee Tradicional Grão 500g",
        price: 36.90, 
        img: "./coffee.png",
        quantity: 2,
        maxQuantity: 3
    }, 
    {
        title: "Café Real Coffee Tradicional Grão 500g",
        price: 36.90, 
        img: "./coffee.png",
        quantity: 2,
        maxQuantity: 3
    }
]
interface CardBagProps {
    onUpdateTotal: (items: { price: number, quantity: number }[]) => void
}


function CardBag({ onUpdateTotal }: CardBagProps) {
    const [items, setItems] = useState<Item[]>(initialArray)

    const updateQuantity = (index: number, increment: number) => {
        setItems((prevItems) => 
            prevItems.map((item, i) =>
                i === index
                    ? { ...item, quantity: Math.min(item.maxQuantity, Math.max(1, item.quantity + increment)) }
                    : item
            
            )
        )
    }

    useEffect(()=> {
        onUpdateTotal(items)
    }, [items, onUpdateTotal])

    return (
        <div className="cardBag">
            <div>
                {
                    items.map((item, index) => {
                        return (
                            <div key={index} className='cardBagItem'>
                                <div className="imgContainer">
                                    <img src={item.img} alt={item.title} />
                                </div>
                                <div>
                                    <p>{item.title}</p>
                                    <p>{item.price}</p>
                                    
                                    <div className='quantity'>
                                        <button onClick={() => updateQuantity(index, -1)} disabled={item.quantity === 1}>-</button>
                                        <input type="text" value={item.quantity} readOnly />
                                        <button onClick={() => updateQuantity(index, 1)} disabled={item.quantity === item.maxQuantity}>+</button>
                                    </div>
                                </div>
                                <div className='removeItem'>
                                    <button onClick={() => setItems(prevItems => prevItems.filter((_, i) => i !== index))}>
                                        <IoClose size={25} className='icon' />
                                    </button>
                                </div>   
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CardBag