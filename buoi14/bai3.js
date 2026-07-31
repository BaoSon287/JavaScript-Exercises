function reverseEachWord(str) {
    let string = '';
    let start = 0;
    str += " ";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            string += reverseWord(str.slice(start, i)) + " ";
            start = i + 1;
        }
    }
    return string;
}
function reverseWord(str) {
    let string = '';
    for (let i = str.length - 1; i >= 0; i--) string += str[i];
    return string;
}
console.log(reverseEachWord("Hoc lap trinh")); // → "coH pal hnirt"
