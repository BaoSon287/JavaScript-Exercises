let n = 17;
let isPrime = true;

if (n < 2) {
    isPrime = false;
}

for (let i = 2; i*i <= n; i++) {
    if (n % i === 0) {
        isPrime = false;
        break;
    }
}

// In kết quả dựa vào isPrime
if (isPrime) {
    console.log(`${n} là số nguyên tố`);
} else {
    console.log(`${n} không phải là số nguyên tố`);
}
