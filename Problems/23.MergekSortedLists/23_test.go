package test

import (
	"sort"
	"testing"
)

func TestMergeKSortedList(t *testing.T) {
	t.Log(mergeKLists([]*ListNode{
		&ListNode{
			Val: 1,
			Next: &ListNode{
				Val: 4,
				Next: &ListNode{
					Val:  5,
					Next: nil,
				},
			},
		},
	}))
}

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */

type ListNode struct {
	Val  int
	Next *ListNode
}

func mergeKLists(lists []*ListNode) *ListNode {
	listLength := len(lists)
	nodeMap := map[int]int{}
	for i := 0; i < listLength; i++ {
		item := lists[i]
		for item != nil {
			if nodeMap[item.Val] == 0 {
				nodeMap[item.Val] = 1
			} else {
				nodeMap[item.Val]++
			}
			item = item.Next
		}
	}
	if len(nodeMap) == 0 {
		return nil
	}
	keys := make([]int, len(nodeMap))
	i := 0
	for k, _ := range nodeMap {
		keys[i] = k
		i++
	}
	sort.Ints(keys)
	res := &ListNode{}
	temp := res
	for i := 0; i < len(keys); i++ {
		for j := 0; j < nodeMap[keys[i]]; j++ {
			temp.Val = keys[i]
			temp.Next = &ListNode{}
			if i == len(keys)-1 && j == nodeMap[keys[i]]-1 {
				temp.Next = nil
			} else {
				temp = temp.Next
			}
		}
	}
	return res
}
