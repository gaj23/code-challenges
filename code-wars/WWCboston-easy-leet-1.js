// Given an integer num, return a string representing its hexadecimal representation.
// For negative integers, two’s complement method is used.
// What is two's complement method? Binary code that

// All the letters in the answer string should be lowercase characters, and there should not be any leading zeros in the answer except for the zero itself.

// Note: You are not allowed to use any built-in library method to directly solve this problem.
// no Math?

// Example 1:
// Input: num = 26
// Output: "1a"

// Example 2:
// Input: num = -1
// Output: "ffffffff"

// Constraints:
// -231 <= num <= 231 - 1



const toHex = num => {
  // use bit operators found in mdn: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift
  // from Mosh on Youtube notes:
  //
  return ((num >>> 0).toString(16))
  // 0 because?
  // 16 because that's indicates that we want to use hexadecimal
};

toHex(10)

// 1 (to decimal system) ===> 00000001
// mathematical formulas exist for this!
