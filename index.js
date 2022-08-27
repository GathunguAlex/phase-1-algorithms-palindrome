function isPalindrome(word) {
  // Write your algorithm here
}

/* 
  Add your pseudocode here
*/this function takes a string as from user and processes it to check if its trully a palindrome and if not it returns false.
 /*
  Add written explanation of your solution here
*/ this function should checkin database if the user input is stored then if it matches,retuns true.

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
