function isPalindrome(str){
    for(let i=0;i<str.length;i++){
        return str[i]===str[str.length-i-1];
    }
}
console.log(isPalindrome("madam"));        // → true
console.log(isPalindrome("Toi yeu Viet Nam")); // → false