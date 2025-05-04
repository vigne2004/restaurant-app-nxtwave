import {useContext} from 'react'

import CartContext from '../../ComponentsContext'

import './index.css'

const Categories = () => {
  const {categories, setCurrentCatg, currentCategory} = useContext(CartContext)

  return (
    <ul className="categories-cont">
      {categories.map(each => {
        const special = each === currentCategory ? 'chosen' : ''

        return (
          <li key={each} className="list-cont">
            <button
              type="button"
              className={`cate-btn ${special}`}
              onClick={() => setCurrentCatg(each)}
            >
              {each}
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default Categories
