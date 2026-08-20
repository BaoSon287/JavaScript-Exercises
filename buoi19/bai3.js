async function safeFetch(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            return "Lỗi HTTP";
        }
        return "Lấy dữ liệu thành công"
    } catch (error) {
        return "Lỗi mạng";
    }
}
safeFetch('http://localhost:3000/products').then(data=>{
    console.log(data);
    
});
safeFetch('http://localhost:3000/products123').then(data=>{
    console.log(data);
    
});
safeFetch('http://localhost:9999/products').then(data=>{
    console.log(data);
    
});