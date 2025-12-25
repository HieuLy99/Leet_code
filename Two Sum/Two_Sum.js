/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let comp = target - nums[i];
    if (map.hasOwnProperty(comp)) {
      return [map[comp], i];
    } else {
      map[nums[i]] = i;
    }
  }
  return [];
};
