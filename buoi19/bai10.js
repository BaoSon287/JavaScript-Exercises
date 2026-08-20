const BASE_URL = "http://localhost:3000";
async function getAllProducts() {
    const response = await fetch(`${BASE_URL}/products`);
    const data = await response.json();
    return data;
}
async function addProduct(product) {
    const response = await fetch(`${BASE_URL}/products`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    });
    const data = await response.json();
    return data;
}
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
    return newData;
}
async function deleteProduct(id) {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error("User not found");
    }
    const data = await response.json();
    return data;
}
const main = async () => {
    try {
        console.log("--- Bước 1: Lấy danh sách sản phẩm ---");
        const products = await getAllProducts();
        console.table(products);

        console.log("--- Bước 2: Thêm một sản phẩm mới ---");
        const newProduct = await addProduct({
            name: "Balo",
            price: 300000,
            stockQuantity: 10
        });
        console.log("Sản phẩm vừa thêm:", newProduct);

        console.log("--- Bước 3: Sửa giá của sản phẩm vừa thêm ---");
        const updatedProduct = await updateProduct(newProduct.id,{price: 350000});
        console.log(`Sản phẩm sau khi cập nhật: ${JSON.stringify(updatedProduct)}`);

        console.log("--- Bước 4: Xóa sản phẩm vừa thêm ---");
        await deleteProduct(newProduct.id);
        console.log(`Đã xóa sản phẩm có ID: ${newProduct.id}`);

        console.log("--- Bước 5: Lấy lại danh sách sản phẩm ---");
        const finalProducts = await getAllProducts();
        console.table(finalProducts);
    }catch(error){
        console.error("Có lỗi", error.message);
    };
}
main()
