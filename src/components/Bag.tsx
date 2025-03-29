
import { useState } from 'react'

import CardBag from '../components/CardBag'
import { IoClose } from "react-icons/io5";

import { onOff, toggleClass } from '../utils/showBag'

import '../styles/bag.scss'

interface BagProps {
    state: boolean
    setState: React.Dispatch<React.SetStateAction<boolean>>
}

function Bag ({state, setState}: BagProps) {
    const [totalPirce, setTotalPrice] = useState(0)

    const calculateTotal = (items: { price: number, quantity: number }[]) => {
        const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
        setTotalPrice(total)
    }

    return (
        <div className='bag'>
            <div className={toggleClass(state, 'bag-content')}>
                <div>
                    <button onClick={() => onOff(state, setState)}>
                        <IoClose size={30} className='icon' />
                    </button>

                    <CardBag onUpdateTotal={calculateTotal} />
                </div>
                

                <div className='totalContainer'>
                    <div className='total'>
                        <p>Total</p>
                        <p>R$ {totalPirce.toFixed(2)}</p>
                    </div>
                    
                    <button>Finalizar Pedido</button>
                </div>
            </div>

            <div className={toggleClass(state, 'bg-grey', 'show-bg')} onClick={() => onOff(state, setState)}></div>
        </div>
    )
}

export default Bag