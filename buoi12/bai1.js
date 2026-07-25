let n = 2.5;
if (n % 1 !== 0) {
    console.log("Số không phải là số nguyên");
} else {
    if (n > 0) {
        if (n % 2 === 0) {
            console.log("Số dương chẵn");
        } else {
            console.log("Số dương lẻ");
        }
    } else if (n < 0) {
        if (n % 2 === 0) {
            console.log("Số âm chẵn");
        } else {
            console.log("Số âm lẻ");
        }
    } else {
        console.log("Số 0");
    }
}