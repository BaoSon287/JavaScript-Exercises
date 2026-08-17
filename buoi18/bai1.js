// Gợi ý khung code
function checkAge(age) {
    return new Promise((resolve, reject) => {
        if (age >= 18) resolve("Đủ tuổi");
        else reject("Chưa đủ tuổi");
    });
}
checkAge(20).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});
