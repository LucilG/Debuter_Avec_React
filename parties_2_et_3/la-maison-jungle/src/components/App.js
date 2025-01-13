import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import Footer from './Footer'

function App() {
    return <div><Banner />
              <div className="container">
                <Cart /><ShoppingList />
              </div>
              <Footer />
           </div>
}

export default App
