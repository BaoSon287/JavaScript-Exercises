function add(a, b) { return a + b; }
function multiply(a, b) { return a * b; }

function calculate(a, b, callback) {
    if (typeof callback === "function") {
        return callback(a, b);
    }
}
calculate(3, 4, add);      // 7
calculate(3, 4, multiply); // 12
console.log(calculate(3, 4, add));
console.log(calculate(3, 4, multiply));