import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import Footer from './Footer'
import { useState } from 'react'
import '../styles/App.css'

function App() {
    const [cart, updateCart] = useState([])

    return <div>
              <Banner />
              <div className="containerApp">
                <Cart cart={cart} updateCart={updateCart} />
                <ShoppingList cart={cart} updateCart={updateCart} />
              </div>
              <Footer />
           </div>
}

export default App
