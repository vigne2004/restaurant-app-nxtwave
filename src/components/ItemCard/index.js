import {useState, useContext} from 'react'
import './index.css'

import CartContext from '../../ComponentsContext'

const ItemCard = props => {
  const {details} = props
  const {
    dishType,
    dishName,
    dishCurrency,
    dishPrice,
    dishDescription,
    dishAvailability,
    dishCalories,
    dishImage,
    addonCat,
  } = details

  const [inCount, setInCount] = useState(0)
  const {count, setCount} = useContext(CartContext)

  const color = dishType === 2 ? 'green' : 'red'
  const border = dishType === 2 ? 'g-border' : 'r-border'

  const decreaseCount = () => {
    if (inCount > 0) {
      setInCount(inCount - 1)
      setCount(count - 1)
    }
  }

  const increaseCount = () => {
    setInCount(inCount + 1)
    setCount(count + 1)
  }

  const getQuantityBtns = () => (
    <div className="btn-cont">
      <button type="button" onClick={decreaseCount}>
        -
      </button>
      <p className="count">{inCount}</p>
      <button type="button" onClick={increaseCount}>
        +
      </button>
    </div>
  )

  return (
    <li className="list-card">
      <div className="cont-in">
        <div className={`cont-1 ${border}`}>
          <div className={`circle ${color}`} />
        </div>
      </div>

      <div className="card-content">
        <h1 className="dish-name">{dishName}</h1>
        <p className="dish-sar">
          {dishCurrency} {dishPrice}
        </p>
        <p className="dish-description">{dishDescription}</p>
        {dishAvailability ? (
          getQuantityBtns()
        ) : (
          <p className="avail">Not Available</p>
        )}
        {addonCat.length > 0 && (
          <p className="custom">Customizations available</p>
        )}
      </div>

      <div className="cal-cont">
        <p className="calories">{dishCalories} calories</p>
      </div>

      <div className="image-cont">
        <img className="dish-img" src={dishImage} alt={dishName} />
      </div>
    </li>
  )
}

export default ItemCard
