/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
// 调用库函数
var smallestK = function(arr, k) {
    if(arr.length <= k) return arr
    arr.sort((a, b) => a - b)
    return arr.slice(0, k)
};

// 使用快速排序(不完全排序)
var smallestK = function(arr, k) {
    if(arr.length <= k) return arr
    quickSort(arr, 0, arr.length - 1, k)
    return arr.slice(0, k)
};

function quickSort(A, p, r, k){
    if(p < r) {
        let q = partition(A, p, r)
        if(q === k) {
            return 
        }
        if(k < q) {
            quickSort(A, p, q - 1, k)
        } else {
            quickSort(A, q + 1, r, k)
        }
    }
}

function partition(A, p, r) {
    let pivot = A[p]
    let left = p + 1
    let bigger = r
    while(left <= bigger) {
        if(A[left] < pivot) {
            left++
        } else {
            swap(A, left, bigger)
            bigger --
        }
    }
    swap(A, p, bigger)
    return bigger
}

function swap(A, p, bigger) {
    let temp = A[p]
    A[p] = A[bigger]
    A[bigger] = temp
}