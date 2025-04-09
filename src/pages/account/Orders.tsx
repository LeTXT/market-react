import { array } from '../../assets/order'
import { allProducts } from '../../assets/productStore'

import '../../styles/account/orders.scss'


function Orders () {

    const orderIds = array.flatMap(itemOrder => itemOrder.orders.map(order => order.id))

    const mathedProducts = allProducts.filter(product => orderIds.includes(product.id))

    return (
        <div className='orders'>
            {
                array.map(orderItem => 
                    mathedProducts.map(product => {
                        return (
                            <div key={product.id + product.title}>
                                <img src={product.img} alt={product.title} />
                                <h3>{product.title}</h3>
                                <p>{orderItem.orders.find(order => order.id === product.id)?.quantity}</p>
                            </div>
                        )
                    }))
                    
            }
        </div>
    )
}

export default Orders;