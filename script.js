
// // 1) 3Sum Closest
// /*
// Q)Given an array nums of n integers and an integer target, find
//   three integers in nums such that the sum is closest to target.
//   Return the sum of the three integers.You may assume that each input
//   would have exactly one solution.
// */

// var threeSumClosest = function (nums, target) {
//     let sum = 0;
//     let result = 0;
//     let diff = 0;
//     let close = 100000;
//     nums.sort((a, b) => a - b)
//     for (let i = 0; i < nums.length; i++) {
//         let j = i + 1;
//         let k = nums.length - 1;
//         while (j < k) {
//             sum = nums[i] + nums[j] + nums[k];
//             diff = Math.abs(target - sum)
//             if (diff === 0)
//                 return sum
//             if (sum < target)
//                 j++;
//             else k--;
//             if (diff < close) {
//                 close = diff;
//                 result = sum;
//             }
//         }
//     }
//     return result;
// };

// console.log(threeSumClosest([-1, 2, 1, -4], 1));
// // Try your own test cases.. :)


// /* 
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807
// */

// function reverseNumber(arr) {
//     let reverse = 0;

//     for (let i = arr.length - 1; i >= 0; i--) {
//         reverse = reverse + arr[i] * (10 ** (i));
//     }
//     return reverse;
// }

// let addTwoNumbers = function (l1, l2) {
//     //     for (let i=0; i< l1.length; i++){
//     //         sum = l1[i]+l2[i];
//     //         if(sum>=10){
//     //             result.push(((sum%10)+carry))
//     //             carry = 1;
//     //         }else{

//     //         }
//     let num1 = reverseNumber(l1);
//     let num2 = reverseNumber(l2);
//     let sum = num1 + num2;
//     let result = [];
//     let digit = 0;
//     while (sum > 0) {
//         digit = sum % 10;
//         result.push(digit);
//         sum = Math.floor(sum / 10);
//     }
//     return result;
// }

// console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));


// /*
// Q3) Given n non - negative integers a1, a2, ..., an, where
//  each represents a point at coordinate(i, ai).n vertical lines
//   are drawn such that the two endpoints of the line i is at(i, ai)
//    and(i, 0).Find two lines, which, together with the x - axis forms a container,
//     such that the container contains the most water.
//  */

// // var maxArea = function (height) {

// //     Brute Force Complexity O(N^2)
// //     let area =[];
// //     for (let i=0; i<height.length; i++){
// //         for (let j=i+1; j<height.length; j++){
// //              area.push((height[i] < height[j] ? height[i] : height[j])*(j-i));

// //         }
// //     }
// //     area.sort((a,b) => a-b);
// //     return area[area.length-1];

// // Efficient Code --- Complexity O(N)
// var maxArea = function (height) {
//     let area = 0;
//     let max = 0;
//     let left = 0;
//     let right = height.length - 1;
//     while (left < right) {
//         area = (height[left] < height[right] ? height[left] : height[right]) * (right - left);
//         max = max > area ? max : area;
//         if (height[left] < height[right]) {
//             left++;
//         }
//         else right--;
//     }
//     return max
// };

// console.log(maxArea([1, 2, 6, 7, 8, 9, 2, 3, 5, 6, 7, 9, 7, 3, 1, 2, 8]));



// /*
// Q4) Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
// Example 4:

// Input: s = "([)]"
// Output: false
// Example 5:

// Input: s = "{[]}"
// Output: true
// */

// var isValid = function (s) {
//     let arr = [];
//     let obj = {
//         '(': ')',
//         '[': ']',
//         '{': '}'
//     }
//     for (let i = 0; i < s.length; i++) {
//         if (obj.hasOwnProperty(s[i])) {
//             arr.push(s[i])
//         }
//         else {
//             if (s[i] === obj[arr[arr.length - 1]]) {
//                 arr.pop();
//             }
//             else {
//                 return false;
//             }
//         }
//     }
//     if (arr.length === 0)
//         return true
//     else
//         return false;

// };

// console.log(isValid("()[]{}"));


// /*
// Q5) Given a string s, return the longest palindromic substring in s.
// */

// var longestPalindrome = function (s) {
//     s.toLowerCase();
//     let max = -1;
//     let palinLong = "";
//     let forward = "";
//     let reverse = "";

//     for (let i = 0; i < s.length; i++) {

//         //If length left to check is smaller than max palindrome we have, then no need to check further
//         if (max > (s.length - i)) {
//             break;
//         }

//         for (let j = i; j < s.length; j++) {
//             //Forward and reverse string to check palindraome
//             forward = forward + s[j]
//             reverse = s[j] + reverse;
//             if (forward === reverse && max < forward.length) {
//                 max = forward.length;
//                 palinLong = forward;
//             }
//         }
//         forward = "";
//         reverse = "";
//     }
//     return palinLong;
// };

// console.log(longestPalindrome('ABABAababa12'));


// /*
// Q6) Given n non-negative integers
//     representing an elevation map where the width of each bar is 1,
//     compute how much water it can trap after raining.
//     Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
//     Output: 6
// */

// var trap = function (height) {

//     let water = 0;
//     let temp = 0;
//     let prev = 0;
//     let prevIndex = 0;
//     prev = height[0];
//     for (let i = 1; i < height.length; i++) {

//         if (height[i] >= prev) {
//             prev = height[i];
//             prevIndex = i;
//             temp = 0;
//         }
//         else {
//             water += prev - height[i];
//             temp += prev - height[i];
//         }
//     }
//     if (prevIndex < height.length - 1) {
//         water -= temp;

//         prev = height[height.length - 1];

//         for (let i = height.length - 2; i >= prevIndex; i--) {
//             if (height[i] >= prev) {
//                 prev = height[i];
//             }
//             else {
//                 water += prev - height[i];
//             }
//         }
//     }
//     return water;
// };

// console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));

// /*
// Q7) Given a string s, find the length of the longest substring without repeating characters.
// */
// var lengthOfLongestSubstring = function (s) {
//     let sub = "";
//     let len = 0;
//     if (s.length !== 0) {
//         len = 1;
//     }
//     for (let i = 0; i < s.length; i++) {
//         sub = s[i];
//         for (let j = i + 1; j < s.length; j++) {
//             if (sub.includes(s[j]))
//                 break;
//             sub += s[j];
//             if (sub.length > len) {
//                 len = sub.length;
//             }
//         }
//     }
//     return len;
// };

// console.log(lengthOfLongestSubstring("abcabcbb"));

// // Efficient method... Sliding window method. 

// var lengthOfLongestSubstringEfficient = function (s) {
//     if (!s) return 0;

//     let start = 0;
//     let end = 0;
//     let maxLength = 0;
//     let uniqueChar = new Set();
//     while (end < s.length) {
//         if (!uniqueChar.has(s[end])) {
//             uniqueChar.add(s[end]);
//             end++;
//             maxLength = Math.max(maxLength, uniqueChar.size);
//         }
//         else {
//             uniqueChar.delete(s[start]);
//             start++;
//         }
//     }
//     return maxLength;
// };

// console.log(lengthOfLongestSubstringEfficient("abcabcbb"));

// /*
// Q8) Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.
// */
// var twoSum = function (nums, target) {
//     let index = [];
//     let a = 0;
//     for (let i = 0; i < nums.length; i++) {
//         a = nums.findIndex(j => (target - nums[i]) === j)
//         if (a !== -1 && a !== i) {
//             index.push(i, a);
//             break;
//         }
//     }
//     return index;
// };

// console.log(twoSum([2, 7, 11, 15], 9));

// // Efficent Code - 
// var twoSumEff = function (nums, target) {
//     let index = [];
//     const mapOfNums = {};
//     let i = 0
//     for (i = 0; i < nums.length; i++) {
//         mapOfNums[nums[i]] = i;
//     }
//     for (i = 0; i < nums.length; i++) {
//         if (mapOfNums[(target - nums[i])] !== undefined && mapOfNums[(target - nums[i])] !== i) {
//             index.push(i, mapOfNums[(target - nums[i])]);
//             break;
//         }
//     }
//     return index;
// };

// console.log(twoSumEff([2, 7, 11, 15], 9));

// /*
// Q9) The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"
// */

// var convert = function (s, numRows) {
//     if (s.length <= 2) return s;
//     let a = [];
//     let row = 0;
//     let isDown = false;

//     for (let i = 0; i < s.length; i++) {
//         if (!a[row])
//             a[row] = s.charAt(i);
//         else
//             a[row] += s.charAt(i);
//         if (row === (numRows - 1))
//             isDown = true;
//         if (row === 0)
//             isDown = false;
//         row = isDown ? row - 1 : row + 1;
//     }
//     let result = "";
//     a.forEach(el => result += el)
//     return result;
// };

// console.log(convert("PAYPALISHIRING", 5));

// /*
// Q10) Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// Given an integer, convert it to a roman numeral.
// */
// var intToRoman = function (num) {
//     let obj = {
//         M: 1000,
//         CM: 900,
//         D: 500,
//         CD: 400,
//         C: 100,
//         XC: 90,
//         L: 50,
//         XL: 40,
//         X: 10,
//         IX: 9,
//         V: 5,
//         IV: 4,
//         I: 1

//     }
//     let d = 0;
//     let roman = "";
//     for (i in obj) {
//         d = Math.floor(num / obj[i])
//         num -= d * obj[i];
//         roman += i.repeat(d);
//     }
//     return roman;
// };

// console.log(intToRoman(1994));

// /*
// Q11) Letter Combinations of a Phone Number
// Input: digits = "23"
// ['', '','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz' ]
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// */

// var letterCombinations = function (digits) {
//     if (!digits) return [];
//     let arr = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
//     let combinations = [];
//     findComb(combinations, digits, "", 0, arr);
//     return combinations;

// }
// function findComb(combinations, d, previous, index, arr) {
//     if (index === d.length) {
//         combinations.push(previous)
//         return;
//     }
//     let letters = arr[+d[index]];
//     for (let i = 0; i < letters.length; i++)
//         findComb(combinations, d, previous + letters[i], index + 1, arr)
// }

// console.log(letterCombinations("345"));


// /*
// Q12) Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// */

// var generateParenthesis = function (n) {
//     let len = n * 2;
//     let arr = []

//     function recurse(cur, open, close) {
//         if (cur.length === len) {
//             arr.push(cur);
//             return;
//         }
//         if (open < n) {
//             recurse(cur + '(', open + 1, close);
//         }
//         if (close < open) {
//             recurse(cur + ')', open, close + 1);
//         }
//     }
//     recurse("", 0, 0);
//     return arr;
// };

// console.log(generateParenthesis(4));

// /*
// Q13) Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
// */

// // Array method Solution time consuming...
// var removeDuplicates = function (nums) {
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i - 1] === nums[i]) {
//             nums.splice(i, 1);
//             --i;
//         }
//     }
//     return nums.length;
// };
// // without array method and faster solution
// var removeDuplicates1 = function (nums) {
//     let j = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (i < nums.length - 1 && nums[i] === nums[i + 1])
//             continue;
//         nums[j++] = nums[i];
//     }
//     return j;
// };
// console.log(removeDuplicates1([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// /*
// Q14) Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// */
// var permute = function (nums) {

//     let res = [];
//     for (let i = 0; i < nums.length; i++) {
//         let rest = permute(nums.slice(0, i).concat(nums.slice(i + 1)));
//         if (!rest.length) {
//             res.push([nums[i]])
//         } else {
//             for (let j = 0; j < rest.length; j++) {
//                 res.push([nums[i]].concat(rest[j]));
//             }
//         }
//     }
//     return res;
// };

// console.log(permute([1, 2, 3]));


// /*
// Q15) Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.
// You must solve the problem without using any built-in library for
// handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.
// Input: num1 = "11", num2 = "123"
// Output: "134"
// */

// var addStrings = function (num1, num2) {

//     const len1 = num1.length - 1;
//     const len2 = num2.length - 1;
//     let result = '';
//     let carry = 0;

//     for (let i = 0, len = Math.max(len1, len2); i <= len; i++) {
//         const n1 = num1[len1 - i] ? num1[len1 - i] | 0 : 0;
//         const n2 = num2[len2 - i] ? num2[len2 - i] | 0 : 0;

//         let temp = n1 + n2 + carry;
//         carry = temp > 9 ? 1 : 0;
//         result = `${temp % 10}${result}`;
//     }
//     return carry > 0 ? 1 + result : result;
// };

// console.log(addStrings("91", "93"));

// /*
// Q16) Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

// It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.
// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
// */
// var findAns = (candidates, start = 0, remainingSum, finalComb, currentComb) => {
//     if (remainingSum < 0) {
//         return finalComb;
//     }
//     if (remainingSum === 0) {
//         finalComb.push(currentComb.slice());
//         return finalComb;
//     }
//     for (let j = start; j < candidates.length; j++) {
//         const current = candidates[j];
//         currentComb.push(current);
//         findAns(candidates, j, remainingSum - current, finalComb, currentComb);
//         currentComb.pop();
//     }
//     return finalComb;
// }

// var combinationSum = function (candidates, target) {
//     return findAns(candidates, 0, target, [], []);
// };

// console.log(combinationSum([2, 3, 6, 7]), 7);

// /*
// Q17) A binary string is monotone increasing if it consists of some number of 0's (possibly none), followed by
// some number of 1's (also possibly none).

// You are given a binary string s. You can flip s[i] changing it from 0 to 1 or from 1 to 0.

// Return the minimum number of flips to make s monotone increasing.
// */

// var minFlipsMonoIncr = function (s) {
//     let flip = 0;
//     let one = 0;

//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === '0') {
//             if (one === 0)
//                 continue;
//             else {
//                 flip++;
//             }
//         }
//         else one++;

//         if (flip > one)
//             flip = one;
//     }
//     return flip;
// };
// console.log(minFlipsMonoIncr("00110"));


// /*
// Q18) You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix
//  directly. DO NOT allocate another 2D matrix and do the rotation.
//  Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

// */

// var rotate = function (matrix) {
//     let y = matrix.length - 1;
//     for (let i = 0; i < matrix.length / 2; i++) {
//         let x = matrix.length - 1 - i;
//         for (let j = i; j < y; j++) {
//             let t = matrix[i][j];
//             matrix[i][j] = matrix[j][y];
//             matrix[j][y] = t;
//             t = matrix[i][j];
//             matrix[i][j] = matrix[y][x];
//             matrix[y][x] = t;
//             t = matrix[i][j];
//             matrix[i][j] = matrix[x][i];
//             matrix[x][i] = t;
//             x--;
//         }
//         y--;
//     }
//     return matrix;
// };

// console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));


// var coinChange = function(coins, amount) {
    
//     // const dp = Array(amount+1).fill(Number.MAX_SAFE_INTEGER);

//     // dp[0]=0;

//     // for(let i=1; i<= amount; i++){

//     //     for(coin of coins){
//     //         if(i - coin >= 0) {
//     //             dp[i] = Math.min(dp[i], (dp[i-coin] +1))
//     //         }
//     //     }
//     // }

//     // if(dp[amount] === Number.MAX_SAFE_INTEGER){
//     //     return -1;
//     // }
//     // return dp[amount];

//     // const dp = new Array(coins.length+1).fill(new Array(amount+1).fill(Number.MAX_SAFE_INTEGER))
//     const dp = Array.from(Array(coins.length+1), () => new Array(amount+1).fill(Number.MAX_SAFE_INTEGER))

//     for(let i=1; i< dp.length; i++){
        
//         dp[i][0] = 0;
//         for(let j=1; j< dp[0].length; j++){
//             if(coins[i-1] > j){
//                 dp[i][j] = dp[i-1][j];
//             }else{
//                 dp[i][j] = Math.min((dp[i-1][j]), (1+ dp[i][j - coins[i-1]]))
//             }
//         }
//    }

//    return dp[coins.length][amount] >= Number.MAX_SAFE_INTEGER ? -1 : dp[coins.length][amount]

// };

// var numberOfBeams = function(bank) {

//     let sum = 0;
//     let prev =0;
//     let curr =0;

//     for(let i=0; i< bank.length; i++){
//         for(let j=0; j< bank[0].length; j++){
//             if(bank[i][j] ==1){
//                 sum+=prev;
//                 curr++;
//             }

//         }
//         if(curr !== 0){
//         prev=curr;
//         curr=0;
//         }
//     }
//     return sum;
// };

var longestCommonSubsequence = function(text1, text2) {
   
    const dp = Array.from(new Array(text2.length+1), ()=> new Array(text1.length+1).fill(0));
 
    console.log(dp);
 
    for(let i=text2.length-1; i>=0; i--){
        for(let j=text1.length-1; j>=0; j--){
            if(text1[j] === text2[i]){
                dp[i][j] = 1 + dp[i+1][j+1]
            }else{
                dp[i][j] = Math.max(dp[i][j+1], dp[i+1][j])
            }
        }
    }
    return dp[0][0];
 };

 var minDistance = function(word1, word2) {
    const arr = Array.from(new Array(word1.length+1), ()=> new Array(word2.length+1));

    let w1 = word1.length;
    let w2 = word2.length;

    for(let i=0; i<=word1.length; i++){
        arr[i][word2.length] = w1--;
    }
    for(let j=0; j<=word2.length; j++){
        arr[word1.length][j] = w2--
    }

    for(let i=word1.length-1; i>=0; i--){
        for(let j=word2.length-1; j>=0; j--){
            if(word1[i]===word2[j]){
                arr[i][j] = arr[i+1][j+1]
            }else{
                arr[i][j] = 1+ Math.min(arr[i][j+1],Math.min(arr[i+1][j], arr[i+1][j+1]));
            }
        }
    }
    return arr[0][0];
}

var isInterleave = function(s1, s2, s3) {

    if(s1.length + s2.length !== s3.length){
        return false;
    }
    const dp = Array.from(new Array(s1.length+1), ()=> new Array(s2.length+1).fill(false));

    dp[s1.length][s2.length] = true;


    for(let i= s1.length; i>=0; i--){
        for(let j= s2.length; j>=0; j--){
            if( i<s1.length && s1[i] == s3[i+j] && dp[i+1][j]){
                dp[i][j] = true;
            }
            if( j<s2.length && s2[j]== s3[i+j] && dp[i][j+1]){
                dp[i][j] = true;
            }
        }
    }
    return dp[0][0];
};  