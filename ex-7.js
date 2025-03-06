function isPalindrome(string) {
  // Start coding here
  let reverseString
  reverseString = string.split("").reverse().join("") 
  return reverseString === string ? true : false
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false