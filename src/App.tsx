import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import MainLayout from './layout/MainLayout'
import Home from './pages/Home'

import SearchResults from './pages/SearchResults'
import Product from './pages/Product'

import AccountLayout from './layout/AccountLayout'
import PrivateRoute from './pages/account/PrivateRoute'
import Profile from './pages/account/Profile'
import Orders from './pages/account/Orders'

import SignIn from './pages/login/SignIn'
import SignUp from './pages/login/SignUp'
import ForgotPassword from './pages/login/ForgotPassword'


function App() {
  return (
    <BrowserRouter basename='market-react/'>
      <Routes>
        <Route path='/' element={<MainLayout />} >
          <Route index element={<Home />} />
          <Route path='/searchResults' element={<SearchResults />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='*' element={<Home />} />

          <Route path='/account' element={<PrivateRoute />}>
            <Route path='' element={<AccountLayout />} >
              <Route index element={<Navigate to="/account/profile" replace />} />
              <Route path='profile' element={<Profile />} />
              <Route path='orders' element={<Orders />} />
            </Route>
          </Route>
        </Route>

        <Route path='/signIn' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
