import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { ProductType } from '../assets/types'

import NavigationBar from '../container/NavigationBar'
import Input from '../container/Input'
import Card from '../container/Card'

import { allProducts } from '../assets/productStore'

import '../styles/products.scss'

function Products() {
    const [searchState, setSearchState] = useState<ProductType[]>(allProducts)
    const location = useLocation()

    useEffect(() => {
        const params = new URLSearchParams(location.search)
        const searchQuery = params.get('search')?.toLowerCase() || ''

        if(searchQuery) {
            const filteredProducts = allProducts.filter(product => product.title.toLowerCase().includes(searchQuery)
        )
        setSearchState(filteredProducts)
        } else {
            setSearchState(allProducts)
        }

    }, [location.search])

    return (
        <div className='products'>
            <div>
                <NavigationBar />
                <Input />

                <Card array={searchState} />
            </div>
        </div>
    )
}

export default Products
