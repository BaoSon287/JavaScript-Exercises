function compressString(str) {
    let string = "";
    let start = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[i + 1] || i === str.length - 1) {
            string += str[i] + `${i + 1 - start}`;
            start = i + 1;
        }
    }
    if (string.length < str.length) return string;
    else return str;
}
console.log(compressString("aaabbbccd")); // → "a3b3c2d1"
console.log(compressString("abc"));       // → "abc" (vì nén ra "a1b1c1" dài hơn)
