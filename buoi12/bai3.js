let diem = 0;
if (diem <0 || diem > 10) {
    console.log("Điểm không hợp lệ");
} else if (diem === 0 || !diem) {
    console.log("Chưa có điểm");
} else if (diem < 5) {
    console.log("Yếu");
} else if (diem < 7) {
    console.log("Trung bình");
} else if (diem < 9) {
    console.log("Giỏi");
} else {
    console.log("Xuất sắc");
}