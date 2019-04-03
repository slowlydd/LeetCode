package test

import (
	"sort"
	"testing"
)

func Test(t *testing.T) {
	t.Log(threeSum([]int{-1, -1, 0, 0, 0, 1, 2, -1, -4}))
}

// 超时答案，最后两个数据量特别大的通过不了
// func threeSum(nums []int) [][]int {
// 	sort.Ints(nums)
// 	numsLength := len(nums)
// 	// 不满足的情况剪枝
// 	if numsLength == 0 || nums[0] > 0 || nums[numsLength-1] < 0 {
// 		return [][]int{}
// 	}
// 	res := [][]int{}
// 	for i := 0; i < numsLength; i++ {
// 		if nums[i] <= 0 {
// 			for j := numsLength - 1; j > i+1; j-- {
// 				for k := j - 1; k > i; k-- {
// 					if nums[j]+nums[k]+nums[i] == 0 {
// 						temp := []int{nums[j], nums[k], nums[i]}
// 						flag := 1
// 						for s := 0; s < len(res); s++ {
// 							if compare(res[s], temp) {
// 								flag = 0
// 								break
// 							}
// 						}
// 						if flag == 1 {
// 							res = append(res, temp)
// 						}
// 					}
// 				}
// 			}
// 		} else {
// 			break
// 		}
// 	}
// 	return res
// }

// func compare(array1 []int, array2 []int) bool {
// 	for i := 0; i < 3; i++ {
// 		if array1[i] != array2[i] {
// 			return false
// 		}
// 	}
// 	return true
// }

func threeSum(nums []int) [][]int {
	sort.Ints(nums)
	res := [][]int{}
	for i := 0; i < len(nums); i++ {
		if i == 0 || nums[i] > nums[i-1] { // 这一行厉害了，从第一个元素开始，然后对于前边已经检查过的元素就不检查了
			l := i + 1
			r := len(nums) - 1
			for l < r {
				s := nums[i] + nums[l] + nums[r]
				if s == 0 {
					res = append(res, []int{nums[i], nums[l], nums[r]})
					l = l + 1
					r = r - 1
					for l < r && nums[l] == nums[l-1] {
						l = l + 1
					}
					for r > l && nums[r] == nums[r+1] {
						r = r - 1
					}
				} else if s > 0 {
					r = r - 1
				} else {
					l = l + 1
				}
			}
		}
	}
	return res
}
