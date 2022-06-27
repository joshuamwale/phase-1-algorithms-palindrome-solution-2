function isPalindrome(word) {
  // iterating from the beginning of the string to the middle of the string

  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    // making a comparison
    const endIndex = word.length - 1 - startIndex;
    if (word[startIndex] !== word[endIndex]) {
      // if the letters don't match, return false
      return false;
    }
  }

  // if we reach the middle, and all the letters match, return true
  return true;
}

/* I am tasked with making a isPalindrome function that returns true or false. When the input string is the same backwards and forwards, I will return true. Therefore, the word "racecar" returns true. The word "robot" returns false.
*/
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
