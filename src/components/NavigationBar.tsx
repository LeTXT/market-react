import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PiHouseSimpleBold as Home, PiShoppingBagBold as BagIcon, PiUserBold as User } from 'react-icons/pi'

import useBag from '../hooks/useBag'

import { onOff} from '../utils/showBag'

import Input from './Input'
import Bag  from './Bag'

import '../styles/navbar.scss'

function NavigationBar() {
    const [state, setState ] = useState<boolean>(false);
    const { bagItems } = useBag()
    

    return (
        <div className='navbar'>
            <div>
                <Link to='/'>
                    <Home size={25} className='icon' />
                </Link>
            </div>
                
            <div className='links'>
                <Input />
                <ul>
                    <li>
                        <div className='bagUnity'>
                            <p>{bagItems.length}</p>
                        </div>
                        <button onClick={() => onOff(state, setState)}>
                            <BagIcon size={25} className='icon' />
                        </button>
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