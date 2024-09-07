'use client';

import { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

// Represents the selected products in the user's cart
const CartProvider = ({ children }) => {
	// Load cart from localStorage or initialize with an empty array
	const [cart, setCart] = useState(() => {
		if (typeof window !== 'undefined') {
			const savedCart = localStorage.getItem('cart');
			return savedCart ? JSON.parse(savedCart) : [];
		}
		return [];
	});

	// Update localStorage whenever cart changes
	useEffect(() => {
		if (cart.length > 0) {
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
