
interface ItemCounterProps {
    handleCounterToDecrease: () => void
    handleCounterIncrease: () => void

    quantity: number
    availableStock: number
}

function ItemCounterButton({handleCounterToDecrease, handleCounterIncrease, quantity, availableStock}: ItemCounterProps) {
    
    return (
        <div className='itemCounterButton'>
           <button onClick={handleCounterToDecrease} disabled={quantity === 1}>-</button>

            <input type="text" value={quantity} readOnly />
            
            <button onClick={handleCounterIncrease} disabled={availableStock === quantity}>+</button>                     
        </div>
    )
}

export default ItemCounterButton