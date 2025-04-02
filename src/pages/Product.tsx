import { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

import NavigationBar from '../components/NavigationBar'
import Input from '../components/Input'
import GramsControl from '../components/GramsControl'
import ItemCounterButton from '../components/ItemCounterButton'
import AddButton from '../components/AddButton'

import { allProducts } from '../assets/productStore'
import { PriceOption } from '../assets/types'

import '../styles/product.scss'


function Product() {
    const [selectedWeights, setSelectedWeights] = useState<{ [key: number]: number }>({});
    const [quantity, setQuantity] = useState<number>(1)
    const [selectedPrice, setSelectedPrice] = useState<number>(0)

    const { id } = useParams()

    const productId = id ? parseInt(id) : null
    const product = allProducts.find(product => product.id === productId)

    const selectedWeight = product ? selectedWeights[product?.id] || product?.priceOptions[0].grams : 0
    const currentPriceOption: PriceOption | undefined = product?.priceOptions.find((option) => option.grams === selectedWeight);

    useEffect(() => {
        if (currentPriceOption) {
            setSelectedPrice(currentPriceOption.price)
        }
    }, [currentPriceOption])

    if (!product) return <p>Produto não encontrado!</p>

    const handleCounter = (n: number) => {

        if (currentPriceOption) {
            const newQuantity = quantity + n
            if (newQuantity >= 1 && newQuantity <= currentPriceOption.availableStock) {
                setQuantity(newQuantity)
            }
        }
        
    }

    const handleWeightChange = (productId: number, weight: number) => {
        setQuantity(1)
        setSelectedWeights((prev) => ({ ...prev, [productId]: weight }));
    };
    

    return (
        <div className='product'>
            <NavigationBar />
            <Input />

            <div className='productContainer'>
                <div>
                    <img src={product.img} alt={product.title} />
                </div>
                <div>
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>

                    <GramsControl
                        item={product}
                        selectedWeight={selectedWeight}
                        setSelectedWeights={setSelectedWeights}
                        handleWeightChange={handleWeightChange}
                    />

                    <div className='addBag'>
                        <p>R$ {selectedPrice.toFixed(2).replace('.', ',')}</p>

                        <ItemCounterButton
                            handleCounterToDecrease={() => handleCounter(-1)}
                            handleCounterIncrease={() => handleCounter(1)}
                            quantity={quantity}
                            availableStock={currentPriceOption?.availableStock || 0}
                        />

                        <AddButton item={{ ...product, selectedWeight, selectedPrice, quantity  }} title='+ SACOLA' />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Product