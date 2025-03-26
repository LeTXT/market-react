import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { ProductType } from '../assets/types'

import NavigationBar from '../container/NavigationBar'
import Input from '../container/Input'

import '../styles/product.scss'
import Card from '../container/Card'

const allProducts: ProductType[] = [
    { title: "Café em Pó Tradicional 500g", price: 36.90, img: "./image 216.png" },
    { title: "Nike Nike Vomero 18", price: 199, img: "" },
    { title: "Chuteira Nike Phantom GX II", price: 123, img: "" },
  ];

function Product() {
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
        <div className='product'>
            <div>
                <NavigationBar />
                <Input />

                <Card array={searchState} />
            </div>
        </div>
    )
}

export default Product

{/* <div className='cardContainer'>
                    {searchState.length > 0 ? (
                        searchState.map((item, index) => (
                            <Card index={index} title={item.title} price={item.price} img={item.img} />
                        ))
                    ) : (
                        <p>Nnehum produto encontrado.</p>
                    )}
                </div> */}