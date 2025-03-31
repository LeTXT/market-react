import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ProductType } from '../assets/types'

import AddButton from "./AddButton";

import '../styles/card.scss'

interface CardProps {
    array: ProductType[]
}

function Card({array}: CardProps) {
    const [selectedWeight, setSelectedWeight] = useState<number | null>(null);
    const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null)

    const navigate = useNavigate()

    useEffect(() => {
        if (selectedProduct) {
            const defaultWeight = selectedProduct.gramOptions[0];
            setSelectedWeight(defaultWeight);
        }
    }, [selectedProduct]);

    const handleWeightChange = (gram: number, item: ProductType) => {
        setSelectedWeight(gram);
        setSelectedProduct(item)
    };

    return (
        <div className='cardContainer'>
            {array.map((item) => {
                    
                    return (
                        <div key={item.id} className='card'>

                            <div className='widthContainer'>
                            <div 
                                className='openProduct' 
                                onClick={() => navigate(`/product/${item.id}`)}
                            >
                                <div className='imgContainer'>
                                    <img src={item.img} alt={item.title} />
                                </div>
                                <p className='title'>{item.title}</p>
                            </div>
                            <div className="gramContainer">
                                {item.gramOptions.map((gram) => (
                                    <div key={item.id}>
                                    <input 
                                        type="radio" 
                                        id={`${item.id}-${gram}`} 
                                        name={`weight-${item.id}`} 
                                        value={gram} 
                                        // checked={selectedWeight === gram}
                                        onChange={() => handleWeightChange(gram, item)}
                                    />
                                        <label htmlFor={`${item.id}-${gram}`}>{gram}g</label>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="priceAndAddButton">
                                <p>R$ {item.price.toFixed(2).replace('.', ',')}</p>
                                <AddButton item={{...item, selectedWeight: selectedWeight ?? item.gramOptions[0]}} title='+ SACOLA' />
                            </div>
                            </div>
                        </div>
                    )})
                    }
        </div>
    )
}

export default Card
