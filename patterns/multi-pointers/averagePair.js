// arr:    sorted array of integers
// target: target average
function averagePair(arr, target) {
  let left  = 0
  let right = arr.length - 1

  while (left < right) {
    const ave = (arr[left] + arr[right]) / 2
    if (ave > target) {
      right--
    } else if (ave < target) {
      left++
    } else { // ave === target
      return true
    }
  }

  return false
}

function log(fn, arr, ave) {
  console.log(arr, ave, '-->', fn(arr, ave))
}

log(averagePair, [1, 2, 3], 2.5)
log(averagePair, [1, 3, 3, 5, 6, 7, 10, 12, 19], 8)
log(averagePair, [-1, 0, 3, 4, 5, 6], 4.1)
log(averagePair, [], 4)
