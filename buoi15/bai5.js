function isPalindrome(str) {
    str = str.toLowerCase().replaceAll(" ", "");
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
        return true
    }
}
console.log(isPalindrome("Nam va van"));
console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
