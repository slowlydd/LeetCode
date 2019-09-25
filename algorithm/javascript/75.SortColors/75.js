/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let start = 0;
  let end = 0;
  let num1 = 0;
  let num2 = 0;
  for (let i = 0; i < nums.length; i++) {
    switch (nums[i]) {
      case 0:
        nums[start++] = 0;
        if (num1) {
          nums[end++] = 1;
        } else {
          end++;
        }
        if (num2) {
          nums[i] = 2;
        }
        break;
      case 1:
        num1++;
        nums[end++] = 1;
        if (num2) {
          nums[i] = 2;
        }
        break;
      case 2:
        num2++;
        break;
    }
  }
};

sortColors([0, 0]);

// 思路如下:
// 1.始终维护一个前边为0，中间为1，后边为2的数组序列
// 2.记录长度为1的数组序列的开始和结束
// 3.每遍历一个元素，判断是0， 1， 2中的某一个，然后往之前的序列中添加，
//   当是0的时候就添到序列1的开始，是1的时候就添到序列1的末尾，是2的话不用修改
// 4.如果当前数字为0，且序列都有值时是最坏的情况，需要判断两次，赋值三个元素，nums[start]赋值为0，
//   nums[end]的后一个元素赋值为1，当前元素置为2
// 时间复杂度O(N), 空间复杂度O(1)
