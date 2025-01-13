import '../styles/Cart.css'

function Cart() {
  // console.log("Cart - React ok");

  const cactusPrice = 8;
  const basilicPrice = 5;
  const mintPrice = 4;

  return (
    <div className="lmj-cart">
      <h2>Panier</h2>
      <ul>
        <li>1 cactus {cactusPrice}€ </li>
        <li>1 basilic {basilicPrice}€ </li>
        <li>1 menthe {mintPrice}€ </li>
      </ul>
      <h2>Prix total : {cactusPrice + basilicPrice + mintPrice}€</h2>
    </div>
  )
}

export default Cart
