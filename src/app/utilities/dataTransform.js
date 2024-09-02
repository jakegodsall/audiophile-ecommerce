/**
 * Takes the selected products in the cart object and
 * returns a new array with the required fields for UI rendering.
 *
 * @param {Array.<Object>} cart - Original array of cart item objects.
 * @param {Array.<Object>} products - All products array.
 * @returns {Array.<Object>} - New array of cart item objects.
 */
const getSelectedProducts = (cart, products) => {
	const selectedProducts = [];
	cart.map((itemInCart) => {
		// find associated value in products object
		const product = products.find(
			(product) => product.id === itemInCart.productId,
		);
		// build object
		const item = {
			id: product.id,
			name: product.name.split(' ')[0],
			price: product.price,
			image: product.image.mobile,
			link: '/' + product.category + '/' + product.slug,
			quantity: itemInCart.quantity,
		};
		// push to the array
		selectedProducts.push(item);
	});
	return selectedProducts;
};

const getTotalNumberOfProducts = (cart) => {
	return cart.reduce((total, item) => {
		return total + item.quantity || 0;
	}, 0);
};

const getTotalPrice = (productArray) => {
	return productArray.reduce((accumulator, currentItem) => {
		return (accumulator = currentItem.price * currentItem.quantity);
	}, 0);
};

const formatCurrency = (value, locale = 'en-US', currency = 'USD') => {
	return new Intl.NumberFormat(locale, {
		style: 'currency',
		currency: currency,
	}).format(value);
};

export {
	getSelectedProducts,
	getTotalNumberOfProducts,
	getTotalPrice,
	formatCurrency,
};
