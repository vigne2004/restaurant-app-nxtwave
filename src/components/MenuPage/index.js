import {useContext} from 'react'

import './index.css'

import CartContext from '../../ComponentsContext'
import ItemCard from '../ItemCard'

const MenuPage = () => {
  const {filteredProducts} = useContext(CartContext)
  return (
    <ul className="menu-page">
      {filteredProducts.map(each => (
        <ItemCard key={each.dishId} details={each} />
      ))}
    </ul>
  )
}

export default MenuPage
