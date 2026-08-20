const BASE_URL = "http://localhost:3000";
async function getProductById(id) {
    const response = await fetch(`${BASE_URL}/products`);
    if (response.status === 404) console.log("Không tìm thấy sản phẩm");
    const data = await response.json();
    console.log(data);
    for (const product of data) {
        if (product.id === id) console.log(product);
        return product;
    }
}
getProductById('1')