import React, { useState, createContext, useContext } from 'react'
import { ProductsItemProps } from '../components'

interface IShoppingCartContext {
  shoppingCart: ProductsItemProps[]
  setShoppingCart: (shoppingCart: ProductsItemProps[]) => void
}

const defaultValue: IShoppingCartContext = {
  shoppingCart: [],
  setShoppingCart: () => null,
}

const ShoppingCartContext = createContext<IShoppingCartContext>(defaultValue)

const useShoppingCartContext = () => useContext(ShoppingCartContext)

const ShoppingCartProvider: React.FC = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState(defaultValue.shoppingCart)

  return (
    <ShoppingCartContext.Provider value={{ shoppingCart, setShoppingCart }}>{children}</ShoppingCartContext.Provider>
  )
}

export { useShoppingCartContext, ShoppingCartProvider }
