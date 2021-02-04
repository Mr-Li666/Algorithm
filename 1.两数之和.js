/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let result = [];

  for(let i in nums){
    let diff = target - nums[i];
    let position = nums.indexOf(diff);
    if(position != -1 && position != i){
      result.push(i,position);
      break
    }else{
      continue
    }
  }
  return result

  // var temp = [];
  //   for(var i=0;i<nums.length;i++){
  //       var dif = target - nums[i];
  //       if(temp[dif] != undefined){
  //           return [temp[dif],i];
  //       }
  //       temp[nums[i]] = i;
  //   }

};
// @lc code=end

