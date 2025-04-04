import { useBag } from '../hooks/useBag'

import { ProductType } from '../assets/types'

interface CardProps {
    item: ProductType & { selectedWeight: number | null }
    title: string
}

function AddButton({item, title}: CardProps) {
    const { addToBag } = useBag()
    
    return (
        <div className='addButton'>
            <button onClick={() => addToBag(item)}>{title}</button>
        </div>
    )
}

export default AddButton