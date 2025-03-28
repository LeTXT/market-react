import NavigationBar from '../container/NavigationBar'
import Input from '../container/Input'

import '../styles/bag.scss'

function Bag () {
    return (
        <div className='bag'>
            <NavigationBar />
            <Input />
            <h1>Bag</h1>
        </div>
    )
}

export default Bag