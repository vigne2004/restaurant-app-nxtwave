import {useState, useEffect} from 'react'

import './App.css'

import Header from './components/Header'
import Categories from './components/Categories'
import MenuPage from './components/MenuPage'

import CartContext from './ComponentsContext'

const App = () => {
  const [count, setCount] = useState(0)
  const [allProducts, setAllProducts] = useState([])
  const [shop, setShop] = useState('')
  const [categories, setCategories] = useState([])

  const [currentCategory, setCurrentCatg] = useState('')
  const [filteredProducts, setFilteredProduct] = useState([])

  const getProducts = async () => {
    const url =
      'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details'
    const response = await fetch(url)
    const data = await response.json()

    const restaurant = data[0].restaurant_name
    const initialCategories = data[0].table_menu_list.map(
      each => each.menu_category,
    )
    const initialProducts = data[0].table_menu_list

    setShop(restaurant)
    setCategories(initialCategories)
    setAllProducts(initialProducts)
    setCurrentCatg(initialCategories[0])
  }

  useEffect(() => {
    getProducts()
  }, [])

  const getFilteredProducts = () => {
    if (shop === 'UNI Resto Cafe') {
      const filteredCate = allProducts.filter(
        each => each.menu_category === currentCategory,
      )
      const menus = filteredCate[0].category_dishes.map(each => ({
        dishAvailability: each.dish_Availability,
        dishType: each.dish_Type,
        dishCalories: each.dish_calories,
        dishCurrency: each.dish_currency,
        dishDescription: each.dish_description,
        dishId: each.dish_id,
        dishImage: each.dish_image,
        dishName: each.dish_name,
        dishPrice: each.dish_price,
        nextUrl: each.nexturl,
        addonCat: each.addonCat,
      }))
      setFilteredProduct(menus)
    }
  }

  useEffect(() => {
    getFilteredProducts()
  }, [currentCategory])

  return (
    <CartContext.Provider
      value={{
        count,
        setCount,
        shop,
        categories,
        currentCategory,
        setCurrentCatg,
        filteredProducts,
      }}
    >
      <Header />
      <Categories />
      <MenuPage />
    </CartContext.Provider>
  )
}

export default App
