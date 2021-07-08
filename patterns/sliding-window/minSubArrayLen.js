function minSubArrayLen(arr, num) {
  let minColl = []

  let left  = 0
  let right = 0
  let sum   = 0

  while (right < arr.length) {

    if (left === right) {
      sum += arr[left]
    } else {
      sum += arr[right]
    }

    // for debugging
    // console.log(left, right, sum)

    if (sum >= num) {
      sum = 0
      minColl.push(right - left + 1)
      left++
      right = left
    } else {
      right++
    }

  }

  return minColl.length === 0 ? 0 : Math.min(...minColl)
}

function log(fn, arr, num) {
  console.log(arr, ',', num, '-->', fn(arr, num))
}

log(minSubArrayLen, [2, 3, 1, 2, 4, 3], 7)
log(minSubArrayLen, [2, 1, 6, 5, 4], 9)
log(minSubArrayLen, [3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)
log(minSubArrayLen, [1, 4, 16, 22, 5, 7, 8, 9, 10], 39)
log(minSubArrayLen, [1, 4, 16, 22, 5, 7, 8, 9, 10], 55)
log(minSubArrayLen, [4, 3, 3, 8, 1, 2, 3], 11)
log(minSubArrayLen, [1, 4, 16, 22, 5, 7, 8, 9, 10], 95)
