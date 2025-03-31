
import { useBag } from '../hooks/useBag'

import { ProductType } from '../assets/types'

interface ItemCounterProps {
    item: ProductType
}

function ItemCounter({item}: ItemCounterProps) {
    const { updateQuantity } = useBag()
    
    return (
        <div className='itemCounter'>
           <button onClick={() => updateQuantity(item.id, item.quantity -1)} disabled={item.quantity === 1}>-</button>

            <input type="text" value={item.quantity} readOnly />
            
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} disabled={item.quantity === item.maxQuantity}>+</button>                        
        </div>
    )
}

export default ItemCounter