
import { useEffect } from 'react'
import { ProductType } from '../assets/types'

interface GramsControlProps {
    item: ProductType
    selectedWeight: number
    setSelectedWeights: React.Dispatch<React.SetStateAction<{ [key: number]: number }>>
    handleWeightChange: (productId: number, weight: number) => void
}

function GramsControl({ item, selectedWeight, setSelectedWeights, handleWeightChange}: GramsControlProps) {

        useEffect(() => {
            const initialWeights: { [key: number]: number } = {};
    
            
            initialWeights[item.id] = item.priceOptions[1].grams;
            
    
            setSelectedWeights(initialWeights);
        }, [item, setSelectedWeights]);

    return (
        <div className="gramContainer">
            {item.priceOptions.map((option) => (
                <div key={item.id + option.id}>
                    <input
                        type="radio"
                        id={`${item.id}-${option.grams}`}
                        name={`weight-${item.id}`}
                        value={option.grams}
                        checked={selectedWeight === option.grams}
                        onChange={() => handleWeightChange(item.id, option.grams)}
                    />
                    <label htmlFor={`${item.id}-${option.grams}`}>{option.grams}g</label>
                </div>
            ))}
        </div>
    )
}

export default GramsControl