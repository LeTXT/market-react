import { ProductType } from '../assets/types'

import '../styles/card.scss'

interface CardProps {
    array: ProductType[]
}

function Card({array}: CardProps) {
    return (
        <div className='cardContainer'>
            {array.length > 0 ? (
                array.map((item, index) => (
                <div key={index} className='card'>
                    <div className='widthContainer'>
                        <div className='imgContainer'>
                        <img src={item.img} alt={item.title} />
                    </div>
                    <p className='price'>R$ {item.price}</p>
                    <p className='title'>{item.title}</p>
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