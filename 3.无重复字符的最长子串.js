/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let result = [];
  if(s.length == 0) return 0;

  for(let i  = 0; i< s.length; i++){
    set.add(s[i]);
    for(let j = i+1; j<s.length;j++){
      if(!set.has(s[j])){
        set.add(s[j])
      }else{
        let nowLength = set.size;
        result.push(nowLength)
        set.clear()
        break;
      }
    }
  }
  return Math.max(result.sort((a,b)=>b-a)[0] || 0 , set.size)

};
// @lc code=end

