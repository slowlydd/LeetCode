/**
 * @param {number[]} nums
 * @return {number}
 */

// 求解连续的最大长度，只需要求解从连续长度为1-nums.length的长度里面最大的和，
// 下面的方法从长度为1开始计算，一直计算到长度为nums.length， 结果超时了，效率太低。
// var maxSubArray = function (nums) {
//   let max = Number.MIN_SAFE_INTEGER;
//   for (let i = 1; i <= nums.length; i++) {
//     let funMax = maxNum(nums, i);
//     if(funMax >= max) {
//       max = funMax;
//     }
//   }
//   return max;
// };

// function maxNum(array, num) {
//   let sum;
//   let max = Number.MIN_SAFE_INTEGER; // 一个所能表示的最小的数
//   for(let i = num; i <= array.length; i++) {
//     sum = 0;
//     for (let j = i - num; j < i; j++) {
//       sum = sum + array[j];
//     }
//     if(sum >= max) {
//       max = sum;
//     }
//   }
//   return max;
// }

// maxSubArray([4,-1,2,1]);


// 动态规划，已通过
// var maxSubArray = function (nums) {
//   // 如果只有一个元素，直接返回
//   if (nums.length === 1) {
//     return nums[0];
//   }

//   let max = nums[0];
//   // 取单个中最大的，如果是一个负数，表示所有都是负数，直接返回
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] > max) {
//       max = nums[i];
//     }
//   }

//   if (max <= 0) {
//     return max;
//   } else {
//     max = 0;
//     let temp = 0;
//     // 说明里边的元素有正有负
//     for (let i = 0; i < nums.length; i++) {
//       if (nums[i] >= 0) {
//         temp += nums[i];
//       } else {
//         if (temp + nums[i] > 0) {
//           max = temp > max ? temp : max;
//           temp = temp + nums[i];
//         } else {
//           max = temp > max ? temp : max;
//           temp = 0;
//         }
//       }
//     }
//     if (max < temp) {
//       max = temp;
//     }

//     return max;
//   }
// };


// 待实现
var maxSubArray = function (nums) {
  // 如果只有一个元素，直接返回
  if (nums.length === 1) {
    return nums[0];
  }

  let max = nums[0];
  let temp = nums[0];
  // 说明里边的元素有正有负
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] >= 0) {
      temp += nums[i];
    } else {
      if(max > 0) {
        if (temp + nums[i] > 0) {
          max = temp > max ? temp : max;
          temp = temp + nums[i];
        } else {
          max = temp > max ? temp : max;
          temp = 0;
        }
      } else {
        max = nums[i] > max ? nums[i] : max;
      }   
    }
  }
  if (max < temp && max >= 0) {
    max = temp;
  }

  return max;
};

maxSubArray([-2, 1]);