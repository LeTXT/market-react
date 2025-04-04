import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
// import Login from './pages/Login'
import SearchResults from './pages/SearchResults'
import Product from './pages/Product'

import SignIn from './pages/login/SignIn'
import SignUp from './pages/login/SignUp'
import ForgotPassword from './pages/login/ForgotPassword'


function App() {
  return (
    <BrowserRouter basename='market-react/'>
      <Routes>
        <Route path='/' element={<Home />} />
        
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        
        <Route path='/searchResults' element={<SearchResults />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
