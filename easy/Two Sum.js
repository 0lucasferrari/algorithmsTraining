/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1] 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function twoSum(nums, target) {
    let indexes = []
    for (let i = 0; i < nums.length; i++) {
        let current = nums[i]
        nums[i] = null
        let complement = target - current
        if (nums.includes(complement)) {
            indexes = [i, nums.indexOf(complement)]
            break
        }
        nums[i] = current
    }
    return indexes
}

/*
console.log(twoSum([2,7,11,15],9)) // expects [ 0, 1 ]
console.log(twoSum([3,2,4],6)) // expects [ 1, 2 ]
console.log(twoSum([3,3,6],6)) // expects [ 0, 1 ]
console.log(twoSum([2,5,5,11],10)) // expects [ 1, 2 ]
*/

function twoSum_2(nums,target) {

    let map = {}

    for (let i = 0; i < nums.length; i++) {
        let complement = target-nums[i]
        if (map[complement] !== undefined) {
            return [map[complement], i]
        }
        map[nums[i]] = i
    }

}

console.log(twoSum_2([2,7,11,15],9)) // expects [ 0, 1 ]
console.log(twoSum_2([3,2,4],6)) // expects [ 1, 2 ]
console.log(twoSum_2([3,3,6],6)) // expects [ 0, 1 ]
console.log(twoSum_2([2,5,5,11],10)) // expects [ 1, 2 ]
