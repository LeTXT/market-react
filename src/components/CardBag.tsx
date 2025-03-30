// import { useEffect } from 'react'
import useBag from '../hooks/useBag'


import { IoClose } from "react-icons/io5";

// import { initialArray } from '../assets/bagProduct'
// import { ProductType } from '../assets/types'

import '../styles/cardBag.scss'


// interface CardBagProps {
//     onUpdateTotal: (items: { price: number, quantity: number }[]) => void
//     setQuantity: React.Dispatch<React.SetStateAction<number>>
// }

// { onUpdateTotal, setQuantity }: CardBagProps


function CardBag() {
    // const [items, setItems] = useState<ProductType[]>(initialArray)
    const { bagItems, removeFromBag, updateQuantity } = useBag()

    // const updateQuantity = (index: number, increment: number) => {
    //     setItems((prevItems) => 
    //         prevItems.map((item, i) =>
    //             i === index
    //                 ? { ...item, quantity: Math.min(item.maxQuantity, Math.max(1, item.quantity + increment)) }
    //                 : item
            
    //         )
    //     )
    // }

    // const deleteItem = (index: number) => {
    //     setItems(prevItems => {
    //         const newItems = prevItems.filter((_, i) => i !== index)
    //         setQuantity(newItems.length)
    //         return newItems
    //     })
        
    //     setItems(prevItems => prevItems.filter((_, i) => i !== index))
    // } 

    // useEffect(()=> {
    //     onUpdateTotal(bagItems)
    //     // setQuantity(items.length)

    // }, [onUpdateTotal])

    return (
        <div className="cardBag">
            <div>
                {
                    bagItems.map((item) => {
                        return (
                            <div key={item.id} className='cardBagItem'>
                                <div className="imgContainer">
                                    <img src={item.img} alt={item.title} />
                                </div>
                                <div>
                                    <p>{item.title}</p>
                                    <p>{'R$ '+ item.price.toFixed(2).replace('.', ',')}</p>
                                    
                                    <div className='quantity'>
                                        <button onClick={() => updateQuantity(item.id, item.quantity -1)} disabled={item.quantity === 1}>-</button>
                                        <input type="text" value={item.quantity} readOnly />
                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} disabled={item.quantity === item.maxQuantity}>+</button>
                                    </div>
                                </div>         
                                <div className='removeItem'>
                                    <button onClick={() => removeFromBag(item.id)}>
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