const student = {
    name: "Minh",
    scores: [8, 7.5, 9, 6],
    getAverage() {
        const sum = this.scores.reduce((acc, cur) => acc + cur);
        return sum / this.scores.length;
    },
    getStatus() {
        const avg = this.getAverage();
        let status = "";
        if (avg >= 8) status = "Giỏi";
        else if (avg >= 6.5) status = "Khá";
        else status = "Trung bình";
        return `Minh đạt loại ${status} với điểm trung bình ${avg}`;
    }
};
console.log(student.getAverage());
console.log(student.getStatus());