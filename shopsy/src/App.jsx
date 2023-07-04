import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Products from './components/products.jsx'
import Cart from './components/Carts.jsx'
import Footer from './components/Footer.jsx'
import LogIn from './components/LogIn.jsx'
// import data from './components/data.jsx'

function App() {
  return (
    <div>
     <Navbar />
     <Home />
     <Products />
     <Cart />
     <Footer />
    </div>
  )
}

export default App
