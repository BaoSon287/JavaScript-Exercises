import { getAllProducts } from "./bai1.js";
const BASE_URL = "http://localhost:3000";
async function deleteProduct(id) {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error("User not found");
    }
    const data = await response.json();
    console.log(data);
}
deleteProduct(2);
getAllProducts();
// ┌─────────┬───────────────┬────────────┬────────┬───────────────┐
// │ (index) │ id            │ name       │ price  │ stockQuantity │
// ├─────────┼───────────────┼────────────┼────────┼───────────────┤
// │ 0       │ '1'           │ 'Áo thun ' │ 199000 │ 15            │
// │ 1       │ '2'           │ 'Túi xách' │ 450000 │ 8             │
// │ 2       │ '3'           │ 'Giày'     │ 890000 │ 5             │
// │ 3       │ 'nGAHtAtocs0' │ 'Mũ'       │ 100000 │ 6             │
// └─────────┴───────────────┴────────────┴────────┴───────────────┘
// ┌─────────┬───────────────┬────────────┬────────┬───────────────┐
// │ (index) │ id            │ name       │ price  │ stockQuantity │
// ├─────────┼───────────────┼────────────┼────────┼───────────────┤
// │ 0       │ '1'           │ 'Áo thun ' │ 199000 │ 15            │
// │ 1       │ '3'           │ 'Giày'     │ 890000 │ 5             │
// │ 2       │ 'nGAHtAtocs0' │ 'Mũ'       │ 100000 │ 6             │
// └─────────┴───────────────┴────────────┴────────┴───────────────┘