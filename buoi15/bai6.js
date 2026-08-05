const nums = [2, 7, 11, 15];
const target = 9;
let flag = false;
for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
        if (nums[i] + nums[j] === target && i !== j) {
            console.log(`Index: ${i} và ${j}`);
            flag = true;
            break;
        }
    }
    if (flag) break;
}