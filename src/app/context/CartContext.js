'use client';

import { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

// Represents the selected products in the user's cart
const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]); // Initialize with an empty array to prevent mismatches

	// Load cart from localStorage after the component has mounted
	useEffect(() => {
		const savedCart = localStorage.getItem('cart');
		if (savedCart) {
			setCart(JSON.parse(savedCart));
		}
	}, []);

	// Update localStorage whenever cart changes
	useEffect(() => {
		if (cart.length > 0) {
			// Update localStorage only if cart has items
			localStorage.setItem('cart', JSON.stringify(cart));
		}
	}, [cart]);

	return (
		<CartContext.Provider value={{ cart, setCart }}>
			{children}
		</CartContext.Provider>
	);
};

export { CartContext, CartProvider };
