package DetectCapital_test

import "testing"

func TestDetectCapital(t *testing.T) {
	detectCapitalUse("wangjinxu")
}

func detectCapitalUse(word string) bool {
	wLen := len(word)
	if wLen == 1 {
		return true
	}
	cNum := 0
	for i := 0; i < wLen; i++ {
		if word[i] >= 'A' && word[i] <= 'Z' {
			cNum++
		}
	}

	if cNum == wLen {
		return true
	} else {
		if cNum == 1 && word[0] >= 'A' && word[0] <= 'Z' {
			return true
		}
		if cNum == 0 {
			return true
		}
		return false
	}
}
