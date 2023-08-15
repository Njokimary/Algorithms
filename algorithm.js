/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (nums.includes(diff, i + 1)) {
            let index = nums.indexOf(diff);
            console.log('exists');
            console.log([i,index]);
        } else {
            console.log('does not exist');
        }
    }
};
//test cases
const nums1 = [2, 7, 11, 15];
const target1 = 9;
twoSum(nums1, target1);