import { useBag } from '../hooks/useBag'

import { IoClose } from "react-icons/io5"

import ItemCounter from './ItemCounter'

import '../styles/cardBag.scss'

function CardBag() {
    const { bagItems, removeFromBag } = useBag()
    
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
                                <div className='titleAndPrice'>
                                    <p>{item.title}</p>
                                    <p>{'R$ '+ item.price.toFixed(2).replace('.', ',')}</p>
                                    
                                    <ItemCounter item={item}/>
                                    
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