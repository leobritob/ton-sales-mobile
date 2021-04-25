import { useCallback, useMemo, useState } from 'react'

import { ProductsItemProps } from '../components'
import { useShoppingCartContext } from '../contexts/useShoppingCart'
import { ProductsHelper } from '../helpers'
import { ProductsServices } from '../services'

export const useProducts = () => {
  const { shoppingCart, setShoppingCart } = useShoppingCartContext()

  const [isLoading, setIsLoading] = useState(false)
  const [products, setProducts] = useState<ProductsItemProps[]>([])

  const getAllProducts = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await ProductsServices.getAll()
      if (response.status === 200) {
        const items = response.data.map((item) => ProductsHelper.formatItem(item))
        setProducts(items)
      }
    } catch (e) {
      console.log(e.message)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const handleShoppingCartProducts = useCallback((shoppingCart: ProductsItemProps[], product: ProductsItemProps) => {
    const shoppingCartCopy = [...shoppingCart]
    const item = shoppingCartCopy.find(({ _id }) => _id === product._id)
    if (item) return shoppingCartCopy.filter(({ _id }) => _id !== product._id)

    shoppingCartCopy.push({ ...product, selected: true })
    return shoppingCartCopy
  }, [])

  const handleSelectedProduct = useCallback(
    (product: ProductsItemProps) => {
      const items = handleShoppingCartProducts(shoppingCart, product)
      setShoppingCart(items)
    },
    [shoppingCart, setShoppingCart, handleShoppingCartProducts]
  )

  const productsFiltered = useMemo(() => {
    const shoppingCartIds = shoppingCart.map(({ _id }) => _id)

    return products.map((product) => {
      const productItem: ProductsItemProps = { ...product, selected: false }
      productItem.selected = shoppingCartIds.includes(product._id)

      return productItem
    })
  }, [products, shoppingCart])

  const shoppingCartAmount = useMemo(() => {
    const amount = shoppingCart
      .map(({ price }) =>
        parseFloat(
          price
            .toString()
            .replace(/[R$' ']/g, '')
            .replace(/,/, '.')
        )
      )
      .reduce((acc, price) => (acc += price), 0)

    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(amount)).toString()
  }, [products, shoppingCart])

  return {
    isLoading,
    products,
    productsFiltered,
    shoppingCartAmount,
    getAllProducts,
    handleShoppingCartProducts,
    handleSelectedProduct,
  }
}
