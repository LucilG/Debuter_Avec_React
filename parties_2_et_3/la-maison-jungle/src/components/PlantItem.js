import '../styles/PlantItem.css'
import CareScale from  './CareScale'
import imgPlant from '../images/basilic.jpg'

function handleClick(name) {
  console.log(`✨ Ceci est un clic ✨ ${name}`)
}

function PlantItem({plantDesc}) {
  return (
    <ul className="lmj-plant-item" onClick={() => handleClick(plantDesc.name)}>
      <img src={imgPlant} alt="plant" className="lmj-plant-item-cover" />
      <li key={plantDesc.name}>
        {plantDesc.name}
        {plantDesc.isSpecialOffer && <p className="lmj-sales">En soldes !</p>}
        <CareScale careType='water' scaleValue={plantDesc.water} />
        <CareScale careType='light' scaleValue={plantDesc.light} />
      </li>
    </ul>
  )
}
export default PlantItem
