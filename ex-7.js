function isPalindrome(string) {
  // Start coding herec
  const loweredStr = string.toLowerCase()
  const reversed = loweredStr.split('').reverse().join('')
  return loweredStr === reversed
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false