import { Outlet, Link, useLocation, useNavigate } from "react-router-dom"
import { arrayObj } from '../assets/registrations'

import '../styles/layout/accountLayout.scss'

const array = [
    {
        path: 'profile',
        title: 'Dados pessoais'
    },
    {
        path: 'orders',
        title: 'Pedido'
    }
]

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
                    {array.map(item => {
                        return (
                            <li className={location.pathname === `/account/${item.path}` ? 'selected' : ''} key={item.path + item.title}>
                                <div className='bar'></div>
                                <Link to={`/account/${item.path}`}>{item.title}</Link>
                            </li>
                        )
                    })}
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
