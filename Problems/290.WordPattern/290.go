package main

/*
 * @lc app=leetcode id=290 lang=golang
 *
 * [290] Word Pattern
 *
 * https://leetcode.com/problems/word-pattern/description/
 *
 * algorithms
 * Easy (34.46%)
 * Total Accepted:    132.8K
 * Total Submissions: 383.5K
 * Testcase Example:  '"abba"\n"dog cat cat dog"'
 *
 * Given a pattern and a string str, find if str follows the same pattern.
 *
 * Here follow means a full match, such that there is a bijection between a
 * letter in pattern and a non-empty word in str.
 *
 * Example 1:
 *
 *
 * Input: pattern = "abba", str = "dog cat cat dog"
 * Output: true
 *
 * Example 2:
 *
 *
 * Input:pattern = "abba", str = "dog cat cat fish"
 * Output: false
 *
 * Example 3:
 *
 *
 * Input: pattern = "aaaa", str = "dog cat cat dog"
 * Output: false
 *
 * Example 4:
 *
 *
 * Input: pattern = "abba", str = "dog dog dog dog"
 * Output: false
 *
 * Notes:
 * You may assume pattern contains only lowercase letters, and str contains
 * lowercase letters separated by a single space.
 */

import (
	"fmt"
	"strings"
)

func main() {
	fmt.Println(wordPattern("abba", "dog dog dog dog"))
}

func wordPattern(pattern string, str string) bool {
	arr := strings.Split(str, " ")
	if len(arr) != len(pattern) {
		return false
	} else {
		m := map[string]string{}
		for idx, v := range pattern {
			k := string(v)
			if m[k] != "" {
				if m[k] != arr[idx] {
					return false
				}
			} else {
				m[k] = arr[idx]
			}
		}
		// 去重，如果有重复则说明不匹配
		m2 := map[string]string{}
		for k, v := range m {
			if m2[v] != "" {
				return false
			} else {
				m2[v] = k
			}
		}
		return true
	}
}
