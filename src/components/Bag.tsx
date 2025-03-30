import { useBag } from '../hooks/useBag'

import CardBag from '../components/CardBag'

import { IoClose } from "react-icons/io5";

import { onOff, toggleClass } from '../utils/showBag'

import '../styles/bag.scss'

interface BagProps {
    state: boolean
    setState: React.Dispatch<React.SetStateAction<boolean>>
}

function Bag ({state, setState}: BagProps) {
    const { bagItems, getTotalPrice } = useBag()

    return (
        <div className='bag'>
            <div className={toggleClass(state, 'bag-content')}>
                <div>
                    <div className='header'>
                        <button onClick={() => onOff(state, setState)}>
                            <IoClose size={30} className='icon' />
                        </button>
                        <div className='bagQuantity'>
                            <p>MINHA SACOLA</p>
                            <div className='pharagraph'>
                                <p>{bagItems.length}</p>
                                <p>{bagItems.length > 1 ? ' itens' : ' item'}</p>
                            </div>
                            
                        </div>
                    </div>
                    

                    <CardBag />
                </div>
                

                <div className='totalContainer'>
                    <div className='total'>
                        <p>Total</p>
                        <p>R$ {getTotalPrice().toFixed(2).replace('.', ',')}</p>
                    </div>
                    
                    <button>Finalizar Pedido</button>
                </div>
            </div>

            <div className={toggleClass(state, 'bg-grey', 'show-bg')} onClick={() => onOff(state, setState)}></div>
        </div>
    )
}

export default Bag