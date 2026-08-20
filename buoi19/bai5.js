const BASE_URL = "http://localhost:3000";
async function updateProduct(id, updatedFields) {
    const oldResponse = await fetch(`${BASE_URL}/products/${id}`);
    const oldData = await oldResponse.json();
    const response = await fetch(`${BASE_URL}/products/${id}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedFields)
    });
    if (!response.ok) {
        throw new Error("Product not found");
    }
    const newData = await response.json();
    console.log(oldData);
    console.log(newData);
    return newData;
}
updateProduct(2, { name: "Túi xách" });
// { id: '2', name: 'Quần Jean', price: 450000, stockQuantity: 8 }
// { id: '2', name: 'Túi xách', price: 450000, stockQuantity: 8 }