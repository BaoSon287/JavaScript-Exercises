const BASE_URL = "http://localhost:3000";
async function addProduct(product) {
    const response = await fetch(`${BASE_URL}/products`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    });
    const data = await response.json();
    console.log(data);
    return data;
}
addProduct({ name: "Mũ", price: 100000, stockQuantity: 6 });


