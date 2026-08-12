const original = {
    name: "Alice",
    address: {
        city: "Hanoi",
        zip: "10000"
    }
};
const shallowCopy = Object.assign({}, original);
shallowCopy.address.city = "Hue";
console.log(original);
console.log(shallowCopy);
// { name: 'Alice', address: { city: 'Hue', zip: '10000' } }
// { name: 'Alice', address: { city: 'Hue', zip: '10000' } }
const json = JSON.stringify(original);
const deepCopy = JSON.parse(json);
deepCopy.address.city = "Hue";
console.log(original);
console.log(deepCopy);
// { name: 'Alice', address: { city: 'Hanoi', zip: '10000' } }
// { name: 'Alice', address: { city: 'Hue', zip: '10000' } }
// - Shallow copy: chỉ copy cấp đầu tiên,
//   object lồng nhau vẫn dùng chung địa chỉ tham chiếu.
// - Deep copy: copy cả object lồng nhau,
//   nên bản sao là object hoàn toàn mới.
