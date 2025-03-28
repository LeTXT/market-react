import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Bag from './pages/Bag'
import Products from './pages/Products'

function App() {
  return (
    <BrowserRouter basename='market-react/'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/bag' element={<Bag />} />
        <Route path='/product' element={<Products />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
