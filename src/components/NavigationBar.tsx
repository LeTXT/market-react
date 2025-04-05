import { useState } from 'react'
import { Link } from 'react-router-dom'

import { PiShoppingBagBold as BagIcon, PiUserBold as User } from 'react-icons/pi'

import { onOff } from '../utils/showBag'

import Input from './Input'
import Bag from './Bag'
import IconButton from './IconButton'

import '../styles/components/navbar.scss'

function NavigationBar() {
    const [state, setState] = useState<boolean>(false);

    const handleClick = () => {
        onOff(state, setState);
    };

    return (
        <div className='navbar'>
            <div className='logo'>
                <Link to='/'>
                    <img src={'/market-react/logo.svg'} alt='logo' />
                </Link>
            </div>

            <div className='links'>
                <Input />
                <ul>
                    <li>
                        <IconButton onClick={handleClick} Icon={BagIcon} size={25} iconClass='bagUnity' />
                    </li>

                    <li><Link to='/signIn' >
                        <User size={25} className='icon' />
                    </Link></li>
                </ul>
            </div>

            <Bag state={state} setState={setState} />

        </div>
    )
}

export default NavigationBar