import useBag from '../hooks/useBag'

import { ProductType } from '../assets/types'

// import { addProductToBag } from '../utils/addProductToBag'

import '../styles/card.scss'

interface CardProps {
    array: ProductType[]
}

function Card({array}: CardProps) {
    const { addToBag } = useBag()

    return (
        <div className='cardContainer'>
            {array.length > 0 ? (
                array.map((item, index) => (
                <div key={index} className='card'>
                    <div className='widthContainer'>
                        <div className='imgContainer'>
                        <img src={item.img} alt={item.title} />
                    </div>
                    <p className='title'>{item.title}</p>
                    <div className='price'>
                        <p>Preço</p>
                        <p>R$ {item.price.toFixed(2).replace('.', ',')}</p>
                    </div>
                    <button onClick={() => addToBag(item)}>COMPRAR</button>
                    </div>
                </div>
                        ))
                    ) : (
                        <p>Nenhum produto encontrado.</p>
                    )}
                </div>
    )
}

export default Card

// addProductToBag(array[index], setQuantity)