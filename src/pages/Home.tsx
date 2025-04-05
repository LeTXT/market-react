
import Card from '../components/Card'

import { allProducts } from '../assets/productStore'

import '../styles/pages/home.scss'

function Home () {
    return (
        <div className='home'>
            <div className='containerImg'>
                <img src="./capa.png" alt="Real Café" />
            </div>
            <div className='width'>
                <h2>Destaque</h2>
                <Card array={allProducts.filter(product => product.tag.includes('emphasis'))} />
            </div>
            <div className='width'>
                <h2>Ofertas</h2>
                {/* <Card array={allProducts.filter(product => product.tag.includes('sale'))} /> */}
            </div>

        </div>
    )
}

export default Home