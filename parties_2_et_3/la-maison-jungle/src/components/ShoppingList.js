import '../styles/ShoppingList.css'
import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import Category from './Category'
import { useState } from 'react'

function ShoppingList({cart, updateCart}) {
  const [selectedCategory, updateSelectedCategory] = useState('all')

  function addToCart(plantName, plantPrice) {
    console.log("add to cart ok")
    const plantInCart = cart.find((plant) => plant.name === plantName)
    if (plantInCart) {
      // si la plante existe, on créé un nouveau tableau sans la plante puis on recréé un tableau avec le bon amount
      const newCart = cart.filter((plant) => plant.name !== plantName)
      updateCart([...newCart, {name: plantName, price: plantPrice, amount: plantInCart.amount + 1}])
    } else {
      updateCart([...cart, {name: plantName, price: plantPrice, amount: 1}])
    }
    console.log(cart)
    console.log(cart.length)
    if (cart.length > 1) {
      console.log(cart[1])
      console.log(cart[1].name)
      console.log(cart[1].price)
      console.log(cart[1].amount)
    }
  }

  return (
    <div className="ContainerShoppingList">
      <Category selectedCategory={selectedCategory} updateSelectedCategory={updateSelectedCategory}/>
      <div className="lmj-plant-list">
        {plantList.map((plant) => (
          (selectedCategory === "all") ? (
            <div className="plantCard">
              <PlantItem plantDesc={plant} />
              <button onClick={() => addToCart(plant.name, plant.price)}>Ajouter</button>
            </div>
          ) : (
            (plant.category === selectedCategory) && (
              <div className="plantCard">
                <PlantItem plantDesc={plant} />
                <button onClick={() => addToCart(plant.name, plant.price)}>Ajouter</button>
              </div>
            )
          )
        ))}
        </div>
    </div>
  )
}

export default ShoppingList
