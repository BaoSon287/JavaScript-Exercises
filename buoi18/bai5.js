const fetchProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["Áo", "Quần"]);
        }, 1000);
    });
};

const fetchUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Không thể lấy thông tin user"));
        }, 1500);
    });
};

const fetchSettings = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Dark mode");
        }, 800);
    });
};
Promise.all([
    fetchProducts(),
    fetchUser(),
    fetchSettings()
])
    .then((results) => {
        console.log("Tất cả thành công:", results);
    })
    .catch((error) => {
        console.log("Có lỗi:", error.message);
    });
Promise.allSettled([
    fetchProducts(),
    fetchUser(),
    fetchSettings()
])
    .then((results) => {
        console.log(results);
    });