import { useBag } from '../hooks/useBag'

import CardBag from '../components/CardBag'

// import { IoClose } from "react-icons/io5";

import { onOff, toggleClass } from '../utils/showBag'

import '../styles/bag.scss'
import IconButton from './IconButton'
import { PiArrowLineRightBold as LineRight } from "react-icons/pi";

interface BagProps {
    state: boolean
    setState: React.Dispatch<React.SetStateAction<boolean>>
}

function Bag ({state, setState}: BagProps) {
    const { bagItems, getTotalPrice } = useBag()

    const handleClick = () => {
        onOff(state, setState);
    };

    return (
        <div className='bag'>
            <div className={toggleClass(state, 'bag-content')}>
                <div className='containerHeadAndCard'>
                    <div className='header'>
                        <div className='bagQuantity'>
                            <p>MINHA SACOLA</p>
                            <div className='pharagraph'>
                                <p>{bagItems.length}</p>
                                <p>{bagItems.length > 1 ? ' itens' : ' item'}</p>
                            </div>
                            
                        </div>
                        <IconButton onClick={handleClick} Icon={LineRight} size={25} />
                    </div>
                    

                    <CardBag />
                </div>
                

                <div className='totalContainer'>
                    <div className='total'>
                        <p>Total</p>
                        <p>R$ {getTotalPrice().toFixed(2).replace('.', ',')}</p>
                    </div>
                    <div className='finalizeOrderButton'>
                        <button>Finalizar Pedido</button>
                    </div>
                </div>
            </div>

            <div className={toggleClass(state, 'bg-grey', 'show-bg')} onClick={ handleClick}></div>
        </div>
    )
}

export default Bag