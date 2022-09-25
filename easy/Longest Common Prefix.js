/* Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 
Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.

*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = ""
    if (strs.length === 0) return prefix
    for (let i = 0; i < strs[0].length; i++) {
        let character = strs[0][i]
        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] !== character) return prefix
        }
        prefix = prefix + character
    }
    return prefix
}

console.log(longestCommonPrefix(["flower","flow","flight"])) // expects: 'fl'
console.log(longestCommonPrefix(["dog","racecar","car"])) // expects: ''
console.log(longestCommonPrefix(["a"])) // expects: 'a'
console.log(longestCommonPrefix([""])) // expects: ''
console.log(longestCommonPrefix(["afo","afable","after"])) // expects: 'af'
console.log(longestCommonPrefix(["a", "a"])) // expects: ''
console.log(longestCommonPrefix(["", "a"])) // expects: ''

/*

fla
f
fl

fl
f
fl

flower
flow
fligth

flo
flo
fli

result = fl

dog
racecar
car

d
r
c

result = ""

a
a
a

result = "a"

a

result = "a"

""
""
""

result = ""

*/