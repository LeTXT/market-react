import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'></Link>
                    </li>
                    <li>
                        <Link to='/login'></Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav