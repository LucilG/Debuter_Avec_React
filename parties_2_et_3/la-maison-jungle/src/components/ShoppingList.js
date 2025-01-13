import '../styles/ShoppingList.css'
import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'

function ShoppingList() {
  const categories = plantList.reduce(
    (accumulator, currentValue) =>
      accumulator.includes(currentValue.category) ? accumulator : accumulator.concat(currentValue.category)
    ,
    [] //initial value
  )
  console.log(categories)

  return (
    <div>
      <ul>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
      <div className="lmj-plant-list">
        {plantList.map((plant) => (
          <PlantItem plantDesc={plant} />
        ))}
      </div>
    </div>
  )
}

export default ShoppingList
