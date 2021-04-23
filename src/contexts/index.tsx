import React from 'react'
import { ShoppingCartProvider } from './useShoppingCart'

export const AppProvider: React.FC = ({ children }) => <ShoppingCartProvider>{children}</ShoppingCartProvider>
