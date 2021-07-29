
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


/* 
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807
*/

function reverseNumber(arr) {
    let reverse = 0;

    for (let i = arr.length - 1; i >= 0; i--) {
        reverse = reverse + arr[i] * (10 ** (i));
    }
    return reverse;
}

let addTwoNumbers = function (l1, l2) {
    //     for (let i=0; i< l1.length; i++){
    //         sum = l1[i]+l2[i];
    //         if(sum>=10){
    //             result.push(((sum%10)+carry))
    //             carry = 1;
    //         }else{

    //         }
    let num1 = reverseNumber(l1);
    let num2 = reverseNumber(l2);
    let sum = num1 + num2;
    let result = [];
    let digit = 0;
    while (sum > 0) {
        digit = sum % 10;
        result.push(digit);
        sum = Math.floor(sum / 10);
    }
    return result;
}

console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));


/*
Q3) Given n non - negative integers a1, a2, ..., an, where
 each represents a point at coordinate(i, ai).n vertical lines
  are drawn such that the two endpoints of the line i is at(i, ai)
   and(i, 0).Find two lines, which, together with the x - axis forms a container,
    such that the container contains the most water.
 */

// var maxArea = function (height) {

//     Brute Force Complexity O(N^2)
//     let area =[];
//     for (let i=0; i<height.length; i++){
//         for (let j=i+1; j<height.length; j++){
//              area.push((height[i] < height[j] ? height[i] : height[j])*(j-i));

//         }
//     }
//     area.sort((a,b) => a-b);
//     return area[area.length-1];

// Efficient Code --- Complexity O(N)
var maxArea = function (height) {
    let area = 0;
    let max = 0;
    let left = 0;
    let right = height.length - 1;
    while (left < right) {
        area = (height[left] < height[right] ? height[left] : height[right]) * (right - left);
        max = max > area ? max : area;
        if (height[left] < height[right]) {
            left++;
        }
        else right--;
    }
    return max
};

console.log(maxArea([1, 2, 6, 7, 8, 9, 2, 3, 5, 6, 7, 9, 7, 3, 1, 2, 8]));



/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
Example 4:

Input: s = "([)]"
Output: false
Example 5:

Input: s = "{[]}"
Output: true
*/

var isValid = function (s) {
    let arr = [];
    let obj = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    for (let i = 0; i < s.length; i++) {
        if (obj.hasOwnProperty(s[i])) {
            arr.push(s[i])
        }
        else {
            if (s[i] === obj[arr[arr.length - 1]]) {
                arr.pop();
            }
            else {
                return false;
            }
        }
    }
    if (arr.length === 0)
        return true
    else
        return false;

};

console.log(isValid("()[]{}"));