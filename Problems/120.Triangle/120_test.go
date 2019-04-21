package Triangle_test

import "testing"

func TestTriangle(t *testing.T) {
	minimumTotal([][]int{
		[]int{2},
		[]int{3, 4},
		[]int{6, 5, 7},
		[]int{4, 1, 8, 3},
	})
}

func minimumTotal(triangle [][]int) int {
	len1 := len(triangle)
	if len1 == 1 {
		return getRes(triangle[0])
	}
	for i := 1; i < len1; i++ {
		len2 := len(triangle[i])
		for j := 0; j < len2; j++ {
			if j == 0 {
				triangle[i][j] = triangle[i-1][0] + triangle[i][j]
			} else if j == len2-1 {
				triangle[i][j] = triangle[i-1][j-1] + triangle[i][j]
			} else {
				triangle[i][j] = compare(triangle[i-1][j], triangle[i-1][j-1]) + triangle[i][j]
			}
		}
	}
	return getRes(triangle[len1-1])
}

func getRes(res []int) int {
	lenRes := len(res)
	sum := res[0]
	for i := 1; i < lenRes; i++ {
		if sum > res[i] {
			sum = res[i]
		}
	}
	return sum
}

func compare(a int, b int) int {
	if a <= b {
		return a
	} else {
		return b
	}
}
