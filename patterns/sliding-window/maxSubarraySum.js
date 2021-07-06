function maxSubarraySum(arr, num) {
  if (arr.length === 0) return null

  let max = arr.slice(0, num).reduce((sum, n) => sum + n, 0)
  let sum = max

  for (let i = num; i < arr.length; i++) {
    sum += arr[i] - arr[i - num]
    if (sum > max) {
      max = sum
    }
  }

  return max
}

function log(fn, arg1, arg2) {
  console.log(arg1, arg2, '-->', fn(arg1, arg2))
}

log(maxSubarraySum, [1, 2, 5, 2, 8, 1, 5], 2)
log(maxSubarraySum, [1, 2, 5, 2, 8, 1, 5], 4)
log(maxSubarraySum, [4, 2, 1, 6], 1)
log(maxSubarraySum, [4, 2, 1, 6, 2], 4)
log(maxSubarraySum, [], 4)
