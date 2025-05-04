import {useContext} from 'react'

import './index.css'

import CartContext from '../../ComponentsContext'

const Header = () => {
  const {count, shop} = useContext(CartContext)

  return (
    <nav className="navbar">
      <h1 className="shop-name">{shop}</h1>
      <div className="shopping-cart">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="cart-icon"
        >
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a1 1 0 0 0 .99.61h9.72a1 1 0 0 0 .99-.79l1.38-6.61H5.21" />
        </svg>
        <span className="cart-badge">{count}</span>
      </div>
    </nav>
  )
}

export default Header
