package reversestring

func main() {

}

func reverseString(s []byte) {
	length := len(s)
	for i := 0; i < length/2; i++ {
		temp := s[i]
		s[i] = s[length-i-1]
		s[length-i-1] = temp
	}
}
