import { Link } from 'react-router-dom'
import { PiHouseSimpleBold as Home, PiShoppingBagBold as Bag, PiUserBold as User } from 'react-icons/pi'

import '../styles/navbar.scss'

function NavigationBar() {
    return (
        <div className='navbar'>
            <div>
                <Link to='/'>
                    <Home size={25} className='icon' />
                </Link>
            </div>
            <div>
                <ul>
                    <li><Link to='/bag'>
                        <Bag size={25} className='icon' />
                    </Link></li>
                    
                    <li><Link to='/login' >
                        <User size={25} className='icon' />
                    </Link></li>
                </ul>
            </div>
        </div>
    )
}

export default NavigationBar