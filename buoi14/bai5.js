function removeSpace(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            result += str[i];
        }
    }

    return result;
}
function isAnagram(str1, str2) {
    str1 = removeSpace(str1).toLowerCase();
    str2 = removeSpace(str2).toLowerCase();
    if (str1.length !== str2.length) return false;
    let count1 = 0;
    let count2 = 0;
    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            if (str2[j] === str1[i]) count1++;
            if (str1[j] === str1[i]) count2++;
        }
        if (count1 !== count2) return false;
    }
    return true;
}
console.log(isAnagram("n g  he si", "sinh  ge"));   // → true (nếu cùng tập ký tự) 
console.log(isAnagram("hello", "world"));      // → false
