package perfectsquare

import "testing"

func TestPerfectSquare(t *testing.T) {
	for i := 1; i < 50; i++ {
		t.Log(isPerfectSquare(i))
	}
}

func isPerfectSquare(num int) bool {
	if num == 1 {
		return true
	} else {
		half := num / 2
		for i := 1; i <= half; i++ {
			if i*i == num {
				return true
			}
		}
		return false
	}
}
