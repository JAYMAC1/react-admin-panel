import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import List from './pages/list/List'
import New from './pages/new/New'
import Single from './pages/single/Single'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/users' element={<List />} />
          <Route path='/users/new' element={<New />} />
          <Route path='/users/:userId' element={<Single />} />
          <Route path='/products' element={<List />} />
          <Route path='/products/new' element={<New />} />
          <Route path='/products/:productId' element={<Single />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
