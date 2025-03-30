import { useBag } from '../hooks/useBag'

import { IoClose } from "react-icons/io5";

import '../styles/cardBag.scss'

function CardBag() {
    const { bagItems, removeFromBag, updateQuantity } = useBag()
    
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
                                        <button onClick={() => 
                                            updateQuantity(item.id, item.quantity -1)} disabled={item.quantity === 1}>-</button>
                                        <input type="text" value={item.quantity} readOnly />
                                        <button onClick={() => 
                                            updateQuantity(item.id, item.quantity + 1)} disabled={item.quantity === item.maxQuantity}>+</button>
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