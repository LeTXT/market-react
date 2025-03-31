import { useParams } from 'react-router-dom'

import NavigationBar from '../components/NavigationBar'
import Input from '../components/Input'

import { allProducts } from '../assets/productStore'

import '../styles/product.scss'


function Product() {
    const { id } = useParams()

    const productId = id ? parseInt(id) : null
    const product = allProducts.find(product => product.id === productId)

    if (!product) return <p>Produto não encontrado!</p>
    
    return (
        <div className='product'>
            <NavigationBar />
            <Input />

            <div className='productContainer'>
                    <img src={product.img} alt={product.title} />
                <div>
                    <h1>{product.title}</h1>
                    <p>R$ {product.price.toFixed(2).replace('.', ',')}</p>

                    <div className='addBag'>
                        <input type="text" />
                        <button>+ SACOLA</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Product