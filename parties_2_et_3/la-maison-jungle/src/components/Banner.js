import logo from '../images/logo_feuille.png'
import '../styles/Banner.css'

function Banner() {
  const title = 'la maison jungle';

  return (
    <header>
      <img src={logo} alt="logo feuille" />
      <h1>{ title.toUpperCase() }</h1>
    </header>
  )
}

export default Banner
