package main

import "fmt"

func main() {
	a := firstMissingPositive([]int{2, 2})
	fmt.Println(a)
}

func firstMissingPositive(nums []int) int {
	length := len(nums)
	if length == 0 {
		return 1
	}
	for i := 0; i < length; {
		if nums[i] <= 0 || nums[i] > length {
			i++
		} else {
			if nums[i] <= i+1 {
				nums[nums[i]-1] = nums[i]
				i++
			} else {
				if nums[nums[i]-1] == nums[i] {
					i++
				} else {
					temp := nums[nums[i]-1]
					nums[nums[i]-1] = nums[i]
					nums[i] = temp
				}
			}
		}
	}

	for i := 0; i < length; i++ {
		if i+1 != nums[i] {
			return i + 1
		}
	}
	return length + 1
}
