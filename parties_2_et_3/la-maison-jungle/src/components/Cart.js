import '../styles/Cart.css'
import { useState, useEffect } from 'react'

function Cart({cart, updateCart}) {
  // console.log("Cart - React ok");

  // partie 2 de la formation
  // const cactusPrice = 8;
  // const basilicPrice = 5;
  // const mintPrice = 4;

  // partie 3 de la formation
  const totalCart = cart.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price * currentValue.amount,
    0,
  );

  const [isOpen, setIsOpen] = useState(false)

  // useEffect a 2 paramètres : le premier est l'effet/action, le deuxième est la condition du déclenchement.
  // Ici on déclenche sur modification du total
  useEffect(() => {
    alert(`J'aurai ${totalCart}€ à payer 💸`)
    }
    ,[totalCart]
  )

  useEffect(() => {
    document.title = `LMJ: ${totalCart}€ d'achats`
  }, [totalCart])

    // partie 2 de la formation
    // return (
    //  <div className="lmj-cart">
    //   <h2>Panier</h2>
    //   <ul>
    //     <li>1 cactus {cactusPrice}€ </li>
    //     <li>1 basilic {basilicPrice}€ </li>
    //     <li>1 menthe {mintPrice}€ </li>
    //   </ul>
    //   <h2>Prix total : {cactusPrice + basilicPrice + mintPrice}€</h2>
    //  </div>
    // )

    // partie 3 de la formation
    return isOpen ? (
        <div className='lmj-cart'>
            <button onClick={() => setIsOpen(false)} className='lmj-cart-toggle-button'>Fermer le panier</button>
            <h2>Panier</h2>
            {cart.length > 0 ? (
              <div>
                {cart.map((plant, index) => (
                  <div>
                    <p>{plant.name} {plant.price}€ x{plant.amount}€</p>
                  </div>
                ))}
                <h3>Total : {totalCart}€</h3>
              </div>
            ) : (
              <div>
                <p>Votre papier est vide</p>
              </div>
            )}
            <button onClick={() => updateCart([])} className='lmj-cart-add-button'>
              Vider le panier
            </button>
        </div>
    ) : (
      <div className='lmj-cart'>
        <button onClick={() => setIsOpen(true)} className='lmj-cart-toggle-button'>Ouvrir le Panier</button>
      </div>
    )
}

export default Cart
