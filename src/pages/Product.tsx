import { useState } from 'react'

import { useParams } from 'react-router-dom'

import NavigationBar from '../components/NavigationBar'
import Input from '../components/Input'
import GramsControl from '../components/GramsControl'

import AddButton from '../components/AddButton'

import { allProducts } from '../assets/productStore'

import '../styles/product.scss'


function Product() {
    const [selectedWeights, setSelectedWeights] = useState<{ [key: number]: number }>({});

    const { id } = useParams()

    const productId = id ? parseInt(id) : null
    const product = allProducts.find(product => product.id === productId)

    if (!product) return <p>Produto não encontrado!</p>

    const selectedWeight = selectedWeights[product.id] || product.priceOptions[0].grams;
    product.selectedPrice = product.priceOptions.find((option) => option.grams === selectedWeight)?.price || product.priceOptions[0].price;

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
                    />

                    <div className='addBag'>
                        <p>R$ {product.selectedPrice.toFixed(2).replace('.', ',')}</p>
                        
                        <AddButton item={{...product, selectedWeight}} title='+ SACOLA' />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Product