
// 1) 3Sum Closest
/*
Q)Given an array nums of n integers and an integer target, find
  three integers in nums such that the sum is closest to target.
  Return the sum of the three integers.You may assume that each input
  would have exactly one solution.
*/

var threeSumClosest = function (nums, target) {
    let sum = 0;
    let result = 0;
    let diff = 0;
    let close = 100000;
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            sum = nums[i] + nums[j] + nums[k];
            diff = Math.abs(target - sum)
            if (diff === 0)
                return sum
            if (sum < target)
                j++;
            else k--;
            if (diff < close) {
                close = diff;
                result = sum;
            }
        }
    }
    return result;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));
// Try your own test cases.. :)

