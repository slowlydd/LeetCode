// 单向扫描法
function sort(A) {
    let p = 0, r = A.length - 1
    if(p < r) {
        quickSort(A, p, r)
    }
    console.log(A)
}

function quickSort(A, p, r) {
    if(p < r) {
        let q = partition(A, p, r)
        quickSort(A, p, q - 1)
        quickSort(A, q + 1, r)
    }
}

// // 一遍单向扫描法
// function partition(A, p, q) {
//     let pivot = A[p]
//     let sp = p + 1
//     let bigger = q
//     while(sp <= bigger) {
//         if(A[sp] <= pivot) {
//             sp++
//         } else {
//             swap(A, sp, bigger) 
//             bigger--
//         }
//     }
//     swap(A, p, bigger)
//     return bigger
// }
// 双向扫描法
function partition(A, p, q) {
    let pivot = A[p]
    let left = p + 1
    right = q
    while(left <= right) {
        // left 不停往右走，直到遇到大于主元的元素
        while(left <= right && A[left] <= pivot) left++
        while(left <= right && A[right]  > pivot) right--
        if(left < right) { // 等于的时候交换是没有意义的
            swap(A, left, right)
        }
    }
    swap(A, p, right)
    return right
}

function swap(A, p, bigger) {
    let temp = A[p]
    A[p] = A[bigger]
    A[bigger] = temp
}

sort([9, 1, 7,3,2,9,4,0,9, 1, 7,3,2,9,4,0,9, 1, 7,3,2,9,4,0,9, 1, 7,3,2,9,4,0,9, 1, 7,3,2,9,4,0])