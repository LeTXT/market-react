import NavigationBar from '../container/NavigationBar'
import Input from '../container/Input'
import Card from '../container/Card'

import '../styles/home.scss'

const arrayDestaque = [
    { title: "Café em Pó Tradicional 500g", price: 36.90, img: "./image 216.png" },
    { title: "Nike Nike Vomero 18", price: 199, img: "" },
    { title: "Chuteira Nike Phantom GX II", price: 123, img: "" },
]

function Home () {
    return (
        <div className='home'>
            <div>
                <NavigationBar />
                <Input />
            </div>
            
            
            <div>
                <img src="./template.png" alt="Tênis Nike" />
            </div>
            <div>
                <h2>Destaque</h2>
                <Card array={arrayDestaque} />
            </div>
        </div>
    )
}

export default Home