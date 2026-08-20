const BASE_URL = "http://localhost:3000";
async function searchProducts(keyword, minPrice, maxPrice) {
    const query = {};
    if (keyword) {
        query.name_like = keyword;
    }
    if (typeof maxPrice === "number" && typeof minPrice === 'number') {
        query.price_gte = minPrice;
        query.price_lte = maxPrice;
    }
    const response = await fetch(`${BASE_URL}/products?${new URLSearchParams(query)}`);
    const data = await response.json();
    console.log(data);
}
searchProducts("mũ", 1000, 300000);