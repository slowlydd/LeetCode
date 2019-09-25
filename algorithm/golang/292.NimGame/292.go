package test

func canWinNim(n int) bool {
	temp := n%4 == 0
	if temp {
		return false
	} else {
		return true
	}
}
