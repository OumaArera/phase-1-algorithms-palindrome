const isPalindrome = word => {
  // Write your algorithm here
  let reversed = word.split("").reverse().join("")
  if (reversed.toLowerCase() === word.toLowerCase()){
    return true;
  }
  return false;
}

/* 
  Add your pseudocode here
  Declare a new variable called reversed;
  split word into different eleents
  reverse the elements
  join the elements
  Compare the reversed element with word
*/

/*
  Add written explanation of your solution here
  The solution reverses the word by entering the reversed word in a new string
  It then compares the reversed string with str
*/

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


