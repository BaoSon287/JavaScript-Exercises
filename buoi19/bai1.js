const BASE_URL = "http://localhost:3000";
export async function getAllProducts() {
    const response = await fetch(`${BASE_URL}/products`);
    const data = await response.json();
    console.table(data);
    return data;
}
getAllProducts()
