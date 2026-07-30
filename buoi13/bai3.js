function repeatTimes(n, callback) {
    if (typeof callback === "function") {
        for (let i = 0; i < n; i++) {
            callback(i);
        }
    }
}

repeatTimes(5, (index) => {
  console.log(`Lần thứ ${index}`);
});
// In ra: Lần thứ 0, Lần thứ 1, ..., Lần thứ 4
