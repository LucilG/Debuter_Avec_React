import { plantList } from '../datas/plantList'
import '../styles/Category.css'

function Category({selectedCategory, updateSelectedCategory}) {
  const categories = plantList.reduce(
    (accumulator, currentValue) =>
      accumulator.includes(currentValue.category) ? accumulator : accumulator.concat(currentValue.category)
    ,
    [] //initial value
  )

  return (
    <div className='category-banner'>
      <select name="categories" value={selectedCategory} onChange={(e) => updateSelectedCategory(e.target.value)} className="categoriesPlants">
        <option key="sélectionner" value="all">Sélectionner</option>
        {categories.map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
      <button onClick={() => updateSelectedCategory('all')} className='init-cat-btn'>Réinitialiser</button>
    </div>
  )
}

export default Category
