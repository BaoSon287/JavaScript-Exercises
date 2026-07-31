function countVowels(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if ((str[i].toLowerCase() === 'a') || (str[i].toLowerCase()) === 'i' || (str[i].toLowerCase()) === 'e' || (str[i].toLowerCase()) === 'o' || (str[i].toLowerCase()) === 'u') {
            count++;
        }
    }
    console.log(count);
}
countVowels("Xin chao cac ban"); // → 6
