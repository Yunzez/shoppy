import { createContext, ReactNode, useContext, useState } from "react";
// a custom hook
import {ShoppingCart} from '../components/ShoppingCart'
type ShoppingCartProviderProps = {
    children: ReactNode
}

type ShoppingCartContextType = {
    getItemQuantity: (id: number) => number
    increaseItemQuantity: (id: number) => void
    decreaseItemQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    openCart: () => void
    closeCart: () => void
    cartQuantity: number
    cartItems: cartItemType[]
}

type cartItemType = {
    id: number
    quantity: number
}

const ShoppingCartContext = createContext({} as ShoppingCartContextType)

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}


export function ShoppingCartProvider({ children }:
    ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useState<cartItemType[]>([])
    const [isOpen, setIsOpen] = useState(false)
    // counting all quantities in our cart
    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)
    
    const openCart =() => setIsOpen(true)
    const closeCart =() => setIsOpen(false)
    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id == id)?.quantity || 0
    }

    function increaseItemQuantity(id: number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id) == null) {
                return [...currItems, { id, quantity: 1 }] // if there is no id of the item in the element, add the id of the element and give it quantity 1
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function decreaseItemQuantity(id: number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.quantity == 1) {
                return currItems.filter(item => item.id !== id)
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(id: number) {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }

    return (
        <ShoppingCartContext.Provider value={{ 
            getItemQuantity, 
            increaseItemQuantity, 
            decreaseItemQuantity, 
            removeFromCart,
            openCart,
            closeCart,
            cartItems,
            cartQuantity }}>

            {children}
            <ShoppingCart isOpen={isOpen}/>
        </ShoppingCartContext.Provider>
    )

}