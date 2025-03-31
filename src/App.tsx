import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import SearchResults from './pages/SearchResults'
import Product from './pages/Product'

function App() {
  return (
    <BrowserRouter basename='market-react/'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/bag' element={<Bag />} /> */}
        <Route path='/searchResults' element={<SearchResults />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
