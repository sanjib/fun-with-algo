// arr: array of numbers
// len: length of array items to sum
function maxSubarraySum(arr, len) {
  if (len > arr.length) return null

  let max = -Infinity
  let sum = 0
  for (let i = 0; i < len; i++) {
    sum += arr[i]
  }

  for (let i = len - 1; i < arr.length - 1; i++) {
    sum += arr[i + 1] - arr[i + 1 - len]
    if (sum > max) {
      max = sum
    }
  }

  return max
}

function log(fn, arr, len) {
  console.log(arr, ',', len, '-->', fn(arr, len))
}

log(maxSubarraySum, [100, 200, 300, 400], 2)
log(maxSubarraySum, [1, 4, 2, 10, 23, 3, 1, 0, 20], 4)
log(maxSubarraySum, [-3, 4, 0, -2, 6, -1], 2)
log(maxSubarraySum, [3, -2, 7, -4, 1, -1, 4, -2, 1], 2)
log(maxSubarraySum, [2, 3], 3)
