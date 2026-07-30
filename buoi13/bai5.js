function fetchDataMock(id, callback) {
    setTimeout(function () {

        if (id > 0)
            return callback(null, "some data");
        else return callback("Invalid id", null);
    }, 1000);
}

fetchDataMock(5, (error, data) => {
    if (error) return console.log("Error:", error);
    console.log("Data:", data);
});

fetchDataMock(-1, (error, data) => {
    if (error) return console.log("Error:", error); // phải in ra lỗi
});
