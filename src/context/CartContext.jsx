import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const cartLS = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ( { children } ) => {

    const [cart, setCart] = useState(cartLS);

    const addToCart = (item, quantity) => {
        const itemAdded = { ...item, quantity };
        const newCart = [...cart];
        const isInCart = newCart.find(item => item.id === itemAdded.id);


        if (isInCart) {
            isInCart.quantity += quantity;
        } else {
            newCart.push(itemAdded);
        }
        setCart(newCart);
    }

    const totalInCart = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0);
    }

    const totalPrice = () => {
        return cart.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2);
    }

    const removeToCart = (itemID) => {
        const cartUpdated = cart.filter(item => item.id !== itemID);
        setCart(cartUpdated);
    }

    const clearCart = () => {
        setCart([]);
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value={ {
            cart,
            setCart,
            addToCart,
            totalInCart,
            removeToCart,
            totalPrice,
            clearCart
            } }>
            { children }
        </CartContext.Provider>
    )
}