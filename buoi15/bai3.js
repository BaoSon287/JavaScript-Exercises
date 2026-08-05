const arr = [1, 2, 2, 3, 4, 1, 5, 6, 7];
let count = 0;
let maxCount = 0;
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) count++;
    else {
        if (maxCount < count) maxCount = count;
        count = 1;
    }
}
console.log(maxCount + 1);
