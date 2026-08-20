const BASE_URL = "http://localhost:3000";
const getProducts = async () => {
    const response = await fetch(`${BASE_URL}/products`);
    return response.json();
};
const getUsers = async () => {
    const response = await fetch(`${BASE_URL}/users`);
    return response.json();
};
const getOrders = async () => {
    const response = await fetch(`${BASE_URL}/orders`);
    return response.json();
};
const getDashboard1 = async () => {
    console.time("tuần tự");
    const products = await getProducts();
    const users = await getUsers();
    const orders = await getOrders();
    console.timeEnd("tuần tự");
    return {
        products,
        users,
        orders
    };
};
const getDashboard2 = async () => {
    console.time("song song");
    const [products, users, orders] = await Promise.all([
        getProducts(),
        getUsers(),
        getOrders()
    ]);
    console.timeEnd("song song");
    return {
        products,
        users,
        orders
    };
};
getDashboard1();//tuần tự: 45.12ms
getDashboard2();//song song: 34.732ms
//gọi song song 3 api được gọi đồng thời k cần chờ từng api hoàn thành nên chạy nhanh hơn