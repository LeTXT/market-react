import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { ProductType } from '../assets/types'

import NavigationBar from '../components/NavigationBar'
import Input from '../components/Input'
import Card from '../components/Card'
import Footer from '../components/Footer'

import { allProducts } from '../assets/productStore'

import '../styles/pages/searchResults.scss'

function SearchResults() {
    const [searchState, setSearchState] = useState<ProductType[]>(allProducts)

    const location = useLocation()

    useEffect(() => {
        const params = new URLSearchParams(location.search)
        const searchQuery = params.get('search')?.toLowerCase() || ''

        if (searchQuery) {
            const filteredProducts = allProducts.filter(product => product.title.toLowerCase().includes(searchQuery)
            )
            setSearchState(filteredProducts)
        } else {
            setSearchState(allProducts)
        }

    }, [location.search])

    return (
        <div className='searchResults'>
            <NavigationBar />
            <Input />

            <Card array={searchState} path='.'/>

            <Footer />
        </div>
    )
}

export default SearchResults
