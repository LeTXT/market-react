import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PiHouseSimpleBold as Home, PiShoppingBagBold as BagIcon, PiUserBold as User } from 'react-icons/pi'

import { onOff} from '../utils/showBag'

import Input from './Input'
import Bag  from './Bag'
import IconButton from './IconButton'

import '../styles/navbar.scss'

function NavigationBar() {
    const [state, setState ] = useState<boolean>(false);

    const handleClick = () => {
        onOff(state, setState);
    };
    

    return (
        <div className='navbar'>
            <div className='logo'>
                <Link to='/'>
                    <Home size={25} className='icon' />
                </Link>
            </div>
                
            <div className='links'>
                <Input />
                <ul>
                    <li>
                        <IconButton onClick={handleClick} Icon={BagIcon} size={25} iconClass='bagUnity' />
                    </li>
                    
                    <li><Link to='/login' >
                        <User size={25} className='icon' />
                    </Link></li>
                </ul>
            </div>

            <Bag state={state} setState={setState} />

        </div>
    )
}

export default NavigationBar