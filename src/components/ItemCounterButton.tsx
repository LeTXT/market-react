import { useBag } from '../hooks/useBag'

import { ProductBagType } from '../assets/types'

interface ItemCounterProps {
    item: ProductBagType & { selectedWeight: number | null }
}

function ItemCounterButton({item}: ItemCounterProps) {
    const { updateQuantity } = useBag()
    
    return (
        <div className='itemCounterButton'>
           <button onClick={() => updateQuantity((item.cardBagId || 0), (item.quantity || 0) -1)} disabled={item.quantity === 1}>-</button>

            <input type="text" value={item.quantity} readOnly />
            
            <button onClick={() => updateQuantity((item.cardBagId || 0), (item.quantity || 0) + 1)} disabled={item.availableStock === item.quantity}>+</button>                     
        </div>
    )
}

export default ItemCounterButton