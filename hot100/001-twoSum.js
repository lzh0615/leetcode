/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//  Input: nums = [2,7,11,15], target = 9
//  Output: [0,1]
//  Output: Because nums[0] + nums[1] == 9, we return [0, 1].

const twoSum = (nums, target) => {
  const h = []
  for (let i = 0; i < nums.length; i++) {
    if(h[nums[i]] !== undefined) return [h[nums[i]], i]
    h[target - nums[i]] = i
  }
}

const nums = [2, 7, 11, 15]

const target = 9
const output = twoSum(nums, target)
console.log(output)
