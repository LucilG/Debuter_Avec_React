import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import Footer from './Footer'
import { useState, useEffect } from 'react'
import '../styles/App.css'

function App() {
  const savedCart = localStorage.getItem("cart")
  const [cart, updateCart] = useState(savedCart? JSON.parse(savedCart) : [])

  //sur modification du cart, on sauvegarde en local pour que l'utilisateur puisse garder son panier même lorsqu'il rafraîchit la page
  useEffect(() => {
    console.log('useEffect modification du cart')
    // localStorage.clear();
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  return (
    <div>
      <Banner />
      <div className="containerApp">
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <Footer />
    </div>
  )
}

export default App
