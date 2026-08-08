const product = {
  name: "Bàn phím cơ",
  price: 890000,
  discount: 20, // %
  getFinalPrice(){
    return this.price - (this.price * this.discount) / 100;
  },
  showInfo(){
    return `${this.name}: giá gốc ${this.price}, giá sau giảm ${this.getFinalPrice()}`
  }
};
console.log(product.getFinalPrice());
console.log(product.showInfo());
