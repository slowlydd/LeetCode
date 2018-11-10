/**
 * @param {number} n
 * @return {number}
 */

// 此种方法会先超出内存限制，其实也会超出时间限制
// var climbStairs = function(n) {
//   if(n == 1) {
//     return 1;
//   }
//   if(n == 2) {
//     return 2;
//   }
//   let dp = [];
//   dp[1] = new Array();
//   dp[1][0] = 1;
//   dp[1][1] = 2;
//   let res = 0;
//   for( let i = 2; i <= n; i++) {
//     dp[i] = new Array();
//     for (let j = 0; j < dp[i - 1].length; j++) {
//       for (let k = 0; k < 2; k++) {
//         dp[i][dp[i].length] = dp[i - 1][j] + k + 1;
//         if(dp[i][dp[i].length - 1] == n) {
//           res++;
//         }
//       }
//     }
//   }
//   return res;
// };

// climbStairs(4);


// 此种答案超出时间限制
// var climbStairs = function(n) {
//   if(n == 1) {
//     return 1;
//   }
//   if(n == 2) {
//     return 2;
//   }
//   let array1 = [1, 2];
//   let array2 = [];
//   let res = 0;
//   for( let i = 2; i <= n; i++) {
//     let temp = 1;
//     for (let j = 0; j < array1.length; j++) {
//         array2[array2.length] = array1[j] + 1;
//         if(array2[array2.length - 1] == n) {
//           res++;
//         }

//         array2[array2.length] = array1[j] + 2;
//         if(array2[array2.length - 1] == n) {
//           res++;
//         }

//         if(array2[array2.length - 1] > n + i) {
//           if(temp == i) {
//             break;
//           } else {
//             temp++;
//           }
//         }
//     }
//     array1 = array2;
//     array2 = [];
//   }
//   return res;
// };

// climbStairs(6);


/**
 * @param {number} n
 * @return {number}
 */
// 此种方法超出时间限制，因为在计算n的时候会计算n-1和n-2, 
//当计算n-1是会计算(n-1) -1也就是重复计算了n-2，数字越大重复的次数越多
// var climbStairs = function (n) {
//   if (n == 1) {
//     return 1;
//   }

//   if (n == 2) {
//     return 2;
//   }

//   let res1 = climbStairs(n - 1);
//   let res2 = climbStairs(n - 2)
//   return res1 + res2;
// }

// climbStairs(4);


/**
 * @param {number} n
 * @return {number}
 */
let dp = [];
var climbStairs = function (n) {
  if (n == 1) {
    return 1;
  }

  if (n == 2) {
    return 2;
  }

  if (dp[n] != undefined) {
    return dp[n];
  }

  let res1 = climbStairs(n - 1);
  let res2 = climbStairs(n - 2);
  dp[n] = res1 + res2;
  return res1 + res2;
}

climbStairs(3);