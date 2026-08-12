function Product(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}
Product.prototype.getTotal = function () {
    return this.price * this.quantity;
};
const product1 = new Product('Bút', 1000, 2);
const product2 = new Product('Vở', 5000, 4);
console.log(product1.getTotal());
console.log(product2.getTotal());
console.log(product1.getTotal === product2.getTotal);