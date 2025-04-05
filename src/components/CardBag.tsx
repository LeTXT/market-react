import { useBag } from '../hooks/useBag'

import { AiOutlineDelete as deleteIcon } from "react-icons/ai";

import { ProductType } from '../assets/types'

import IconButton from './IconButton'

import ItemCounterButton from './ItemCounterButton'

import '../styles/components/cardBag.scss'


function CardBag() {
    const { bagItems, removeFromBag, updateQuantity } = useBag()

    const handleClick = (item: ProductType) => { 
        const cardItem = item.cardBagId ?? 0

        removeFromBag(cardItem)
    }

    const handleCounter = (item: ProductType, n: number) => {
        const newQuantity = item.quantity + n;
        const stock = item.availableStock ?? 0
        const cardItem = item.cardBagId ?? 0
        if (newQuantity >= 1 && newQuantity <= stock) {
            updateQuantity(cardItem, newQuantity);
        }
    };
    
    return (
        <div className="cardBag">
            <div>
                {
                    bagItems.map((item) => {

                        return (
                            <div key={item.cardBagId} className='cardBagItem'>
                                <div className="imgContainer">
                                    <img src={item.img} alt={item.title} />
                                </div>
                                <div className='titleAndPrice'>
                                    <p>{item.title}</p>
                                    <p>{item.selectedWeight}g</p>
                                    <p className='price'>{'R$ '+ (item.selectedPrice || 0).toFixed(2).replace('.', ',')}</p>
                                    
                                    <ItemCounterButton 
                                    handleCounterToDecrease={() => handleCounter(item, -1)} 
                                    handleCounterIncrease={() => handleCounter(item, 1)} 
                                    quantity={item.quantity}
                                    availableStock={(item.availableStock || 0)}
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