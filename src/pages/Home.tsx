import NavigationBar from '../components/NavigationBar'
import Input from '../components/Input'
import Card from '../components/Card'
import Footer from '../components/Footer'

import { allProducts } from '../assets/productStore'

import '../styles/home.scss'

function Home () {
    return (
        <div className='home'>
            
            <NavigationBar />
            <Input />
          
            
            <div className='containerImg'>
                <img src="./capa.png" alt="Real Café" />
            </div>
            <div className='width'>
                <h2>Destaque</h2>
                <Card array={allProducts.filter(product => product.tag.includes('emphasis'))} />
            </div>
            <div className='width'>
                <h2>Ofertas</h2>
                <Card array={allProducts.filter(product => product.tag.includes('sale'))} />
            </div>

            <Footer />
        </div>
    )
}

export default Home