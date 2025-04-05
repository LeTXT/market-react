import { Outlet, Link, useLocation, useNavigate } from "react-router-dom"
import { arrayObj } from '../assets/registrations'

import '../styles/layout/accountLayout.scss'

function AccountLayout() {
    const location = useLocation()
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('authKey')
        navigate('/')
    }

    return (
        <div className="accountLayout">

            <nav className="containerNav">
                <div className="greeting">
                    <h2>Olá,</h2>
                    <h3>{arrayObj[0].user.split(' ')[0]}!</h3>
                </div>
                <ul>
                    <li>
                        <div className={`bar ${location.pathname === '/account/profile' ? 'selected' : ''}`}></div>
                        <Link to='/account/profile'>Dados pessoais</Link>
                    </li>
                    <li>
                        <div className={`bar ${location.pathname === '/account/orders' ? 'selected' : ''}`}></div>
                        <Link to='/account/orders'>Pedido</Link>
                    </li>
                    <li>
                        <button onClick={handleLogout}>Sair</button>
                    </li>
                </ul>
            </nav>


            <Outlet />
        </div>
    )
}

export default AccountLayout
