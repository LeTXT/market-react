import { Navigate, Outlet } from 'react-router-dom'

const isAuthenticated = () => {
    return localStorage.getItem('authKey')
}

function PrivateRoute() {
    return isAuthenticated() ? <Outlet /> : <Navigate to='/signIn' />
}

export default PrivateRoute