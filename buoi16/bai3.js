const employees = [
    { id: "E01", name: "An", department: "Sales" },
    { id: "E02", name: "Bình", department: "IT" },
    { id: "E03", name: "Chi", department: "IT" },
];
const result = employees.reduce((acc, cur) => {
    acc[cur.id] = cur;
    return acc;
}, {});
console.log(result);
const array = Object.values(result);
console.log(array);
const count = array.reduce((acc, cur) => {
    acc[cur.department] = (acc[cur.department] || 0) + 1;
    return acc;
}, {});
console.log(count);
