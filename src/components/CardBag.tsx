import { useBag } from '../hooks/useBag'

import { AiOutlineDelete as deleteIcon } from "react-icons/ai";

import { ProductBagType } from '../assets/types'
// import { ProductType, ProductBagType } from '../assets/types'

import IconButton from './IconButton'

import ItemCounterButton from './ItemCounterButton'

import '../styles/cardBag.scss'

function CardBag() {
    const { bagItems, removeFromBag } = useBag()

    const handleClick = (item: ProductBagType) => {
        console.log(item.selectedWeight);
        
        removeFromBag((item.cardBagId || 0))
    }
    
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
                                    
                                    <ItemCounterButton item={item}/>
                                    
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