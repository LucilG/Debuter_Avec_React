const Banner = () => {
  // console.log("Banner - React ok");
  
  const title = 'la maison jungle';

  return (
    <header>
      <img src="images/logo_feuille.png" alt="logo feuille" />
      <h1>{ title.toUpperCase() }</h1>
    </header>
  )
}

const Cart = () => {
  // console.log("Cart - React ok");

  const cactusPrice = 8;
  const basilicPrice = 5;
  const mintPrice = 4;

  return (
    <div id="panier">
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

ReactDOM.render(<React.Fragment><Banner /><Cart /></React.Fragment>, document.getElementById("root"));
