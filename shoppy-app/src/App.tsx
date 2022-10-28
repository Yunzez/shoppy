import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import { Container } from 'react-bootstrap'
import { Store } from './pages/Store'
import { About } from './pages/About'
import { User } from './pages/User'
import { Home } from './pages/Home'
import { Navbar } from './components/Navbar'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
function App() {
  const [count, setCount] = useState(0)

  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/store' element={<Store />} />
          <Route path='/user' element={<User />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>

  )
}

export default App
