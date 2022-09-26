/*

9. Palindrome Number

Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.
 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1
 

Follow up: Could you solve it without converting the integer to a string?

*/

const palindromeNumber = function (number) {
    let temp = number
    let reverse = 0
    while (temp != 0) {
        reverse = (reverse * 10) + (temp % 10)
        temp = Math.floor(temp / 10)
    }
    return reverse == number
}

console.log(palindromeNumber(1))
console.log(palindromeNumber(121))
console.log(palindromeNumber(1221))
console.log(palindromeNumber(12321))
console.log(palindromeNumber(123217))
console.log(palindromeNumber(123))
console.log(palindromeNumber(111))
console.log(palindromeNumber(171))
console.log(palindromeNumber(456))
console.log(palindromeNumber(234))
console.log(palindromeNumber(100021))