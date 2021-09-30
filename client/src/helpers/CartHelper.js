export function addToCart (product, cart, setCart, amount) {
    let found = false;
    
    setCart(cart.map((item) => {
        if (item.id === product.id) {
            found = true;
            console.log('foundd. quantity: ' + item.quantity);
            return {
                ...item, quantity: parseInt(item.quantity + amount)
            }
        }

        return item;
    }));

    if (!found) {
        setCart((cart) => [ ...cart, {
            id: product.id,
            title: product.title,
            price: product.price,
            quantity: amount
        } ])
    }
}