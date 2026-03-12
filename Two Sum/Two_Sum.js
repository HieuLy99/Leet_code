/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    // lặp hết mảng  
    let comp = target - nums[i];
    // tính toán xem số bị trừ là bao nhiêu
    if (map.hasOwnProperty(comp)) {
      // kiểm tra trong object có chứa số trừ chưa
      return [map[comp], i];
      // nếu có rồi thì lưu lại 
    } else {
      map[nums[i]] = i;
    }
  }
  return [];
};


// cách 2 

for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }