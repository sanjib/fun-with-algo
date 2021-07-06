function countUniqueValues(arr) {
  let left  = 0
  let right = 1

  while (right < arr.length) {
    if (arr[left] !== arr[right]) {
      left++
      arr[left] = arr[right]
    }
    right++
  }
  
  arr.splice(left + 1)
  return arr.length
}

function log(fn, arg) {
  console.log([...arg], fn(arg))
}

log(countUniqueValues, [1, 1, 1, 1, 1, 2])
log(countUniqueValues, [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])
log(countUniqueValues, [])
log(countUniqueValues, [-2, -1, -1, 0, 1])
