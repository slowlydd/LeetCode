/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
  if(nums.length < 2) {
    return 0;
  } else {
    // 找出最大值与最小值
    let min = Number.MAX_SAFE_INTEGER, max = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i < nums.length; i++) {
      if(nums[i] < min) {
        min = nums[i];
      }

      if(nums[i] > max) {
        max = nums[i];
      }
    }

    // 设置桶的大小与数量
    let bucketSize = Math.max(1, parseInt((max - min) / (nums.length - 1)));
    let bucketNum = (max - min) / bucketSize + 1;
    let bucket = [];
    for(let i = 0; i < nums.length; i++) {
      
      let bucketIndex = parseInt((nums[i] - min) / bucketSize);
      if(!bucket[bucketIndex]) {
        bucket[bucketIndex] = {
          maxval: Number.MIN_SAFE_INTEGER,
          minval: Number.MAX_SAFE_INTEGER
        };
      }
      bucket[bucketIndex].minval = Math.min(nums[i], bucket[bucketIndex].minval);
      bucket[bucketIndex].maxval = Math.max(nums[i], bucket[bucketIndex].maxval);
    }
    let maxGap = 0, preBucketMax = min; 
    for(let i = 0; i < bucketNum; i++) {
      if(bucket[i]) {
        maxGap = Math.max(maxGap, bucket[i].minval - preBucketMax);
        preBucketMax = bucket[i].maxval;
      }
    }
    return maxGap;
  } 
};