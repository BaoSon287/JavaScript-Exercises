const cart = [
    { name: "Áo thun", price: 150000, quantity: 2 },
    { name: "Quần jean", price: 350000, quantity: 1 },
    { name: "Giày", price: 500000, quantity: 1 },
];
const sumCart = cart.reduce((acc, cur) => {
    return acc + cur.price * cur.quantity;
}, 0);
console.log(sumCart);
const maxCart = cart.reduce((acc, cur) => {
    return acc > cur.price * cur.quantity ? acc : cur.price * cur.quantity;
}, 0);
for (const product of cart) {
    if (product.price * product.quantity === maxCart) {
        console.log(product.name);
        break;
    }
}
const result = cart.filter((product) => product.quantity > 1).map((product) => product.name);
console.log(result);
