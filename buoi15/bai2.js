const words = ["a", "b", "a", "c", "b", "a"];
const countWords = words.reduce((acc, cur) => {
    if (!acc.arr1.includes(cur)) {
        acc.arr1.push(cur);
        acc.arr2[acc.arr1.indexOf(cur)] = 1;
    } else {
        acc.arr2[acc.arr1.indexOf(cur)]++;
    }
    return acc;
}, {
    arr1: [],
    arr2: []
});
console.log(countWords);

for (let i = 0; i < countWords.arr1.length; i++) {
    console.log(`${countWords.arr1[i]}: ${countWords.arr2[i]}`);
}
