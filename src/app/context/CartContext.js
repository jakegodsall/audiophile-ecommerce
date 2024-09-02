'use client';

import { createContext, useState } from 'react';

const CartContext = createContext();

// Represents the selected products in the user's cart
const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	return (
		<CartContext.Provider value={{ cart, setCart }}>
			{children}
		</CartContext.Provider>
	);
};

export { CartContext, CartProvider };
