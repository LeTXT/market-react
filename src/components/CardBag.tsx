import { useBag } from '../hooks/useBag'

import { AiOutlineDelete as deleteIcon } from "react-icons/ai";

import { ProductType } from '../assets/types'

import IconButton from './IconButton'

import ItemCounterButton from './ItemCounterButton'

import '../styles/cardBag.scss'

interface CardBagProps {
    path?: string
}


function CardBag({path = '.'}: CardBagProps) {
    const { bagItems, removeFromBag, updateQuantity } = useBag()

    const handleClick = (item: ProductType) => { 
        removeFromBag((item.cardBagId || 0))
    }

    const handleCounter = (item: ProductType & { selectedWeight: number | null }, n: number) => {
        updateQuantity((item.cardBagId || 0), item.quantity + n)
    }
    
    return (
        <div className="cardBag">
            <div>
                {
                    bagItems.map((item) => {
                        return (
                            <div key={item.cardBagId} className='cardBagItem'>
                                <div className="imgContainer">
                                    <img src={`${path}${item.img}`} alt={item.title} />
                                </div>
                                <div className='titleAndPrice'>
                                    <p>{item.title}</p>
                                    <p>{item.selectedWeight}g</p>
                                    <p className='price'>{'R$ '+ (item.selectedPrice || 0).toFixed(2).replace('.', ',')}</p>
                                    
                                    <ItemCounterButton 
                                    handleCounterToDecrease={() => handleCounter(item, -1)} 
                                    handleCounterIncrease={() => handleCounter(item, 1)} 
                                    quantity={item.quantity}
                                    availableStock={item.availableStock}
                                    />
                                    
                                </div>            
                                    <IconButton onClick={() => handleClick(item)} Icon={deleteIcon} size={25} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CardBag