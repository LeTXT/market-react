import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ProductType } from '../assets/types'

import AddButton from "./AddButton";
import GramsControl from "./GramsControl";

import '../styles/card.scss'

interface CardProps {
    array: ProductType[]
}

function Card({ array }: CardProps) {
    const [selectedWeights, setSelectedWeights] = useState<{ [key: number]: number }>({});

    const navigate = useNavigate()

    return (
        <div className='cardContainer'>
            {array.map((item) => {
                const selectedWeight = selectedWeights[item.id] || item.priceOptions[0].grams;
                item.selectedPrice = item.priceOptions.find((option) => option.grams === selectedWeight)?.price || item.priceOptions[0].price;

                return (
                    <div key={item.id} className='card'>

                        <div
                            className='openProduct'
                            onClick={() => navigate(`/product/${item.id}`)}
                        >
                            <div className='imgContainer'>
                                <img src={item.img} alt={item.title} />
                            </div>
                            <p className='title'>{item.title}</p>
                        </div>
                        
                        <GramsControl
                            item={item}
                            selectedWeight={selectedWeight}
                            setSelectedWeights={setSelectedWeights}
                        />

                        <div className="priceAndAddButton">
                            <p>R$ {item.selectedPrice.toFixed(2).replace('.', ',')}</p>

                            <AddButton item={{ ...item, selectedWeight}} title='+ SACOLA' />
                        </div>

                    </div>
                )
            })
            }
        </div>
    )
}

export default Card