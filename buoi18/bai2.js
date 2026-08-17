// Gợi ý khung code
function fetchUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: id,
                name: "User " + id
            });
        }, 1000);
    });
}
fetchUser(5).then((data) => {
    console.log(data);
});
console.log("Đang chờ...");

