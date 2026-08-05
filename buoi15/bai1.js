const arr = [3, 7, 2, 9, 9, 5];
let max1 = arr[0];
let max2 = arr[0];
arr.forEach(num => {
    if (max1 < num) {
        max2 = max1;
        max1 = num;
    }
    else {
        if (max2 < num && num !== max1) max2 = num;
    }
});
console.log(max2);
