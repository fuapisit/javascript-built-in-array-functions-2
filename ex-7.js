function isPalindrome(string) {
  // Start coding here
  const cleanedStr = string.replace(/\s+/g, '').toLowerCase();
 
  return cleanedStr === cleanedStr.split('').reverse().join('');
}


//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false