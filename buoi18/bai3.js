function layDonHang(id) {
    return new Promise((resolve) => {
        resolve({
            id: id,
            sanPham: "Áo thun"
        });
    })
}
function tinhTien(donHang) {
    return new Promise((resolve) => {
        resolve(donHang);
    })
}

function apDungGiamGia(gia) {
    return new Promise((resolve) => {
        resolve(gia - gia * 10 / 100);
    })
}
layDonHang(5)
    .then((id) => {
        console.log(id);
        return tinhTien(5);
    })
    .then((donHang) => {
        console.log(donHang);
        return apDungGiamGia(50);
    })
    .then((gia) => {
        console.log(gia);
    });