import NavigationBar from '../container/NavigationBar'
import Input from '../container/Input'
import Card from '../container/Card'
import Footer from '../container/Footer'

import {arrayEmphasis} from '../assets/productStore'

import '../styles/home.scss'

function Home () {
    return (
        <div className='home'>
            <div>
                <NavigationBar />
                <Input />
            </div>
            
            
            <div className='containerImg'>
                <img src="./capa.png" alt="Real Café" />
            </div>
            <div className='width'>
                <h2>Destaque</h2>
                <Card array={arrayEmphasis} />
            </div>
            <div className='width'>
                <h2>Ofertas</h2>
                <Card array={arrayEmphasis} />
            </div>
            <Footer />
        </div>
    )
}

export default Home