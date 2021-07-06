function sumZero(arr) {
  let left  = 0
  let right = arr.length - 1

  while (left < right) {
    const num1 = arr[left]
    const num2 = arr[right]
    const sum  = num1 + num2
    console.log(num1, '+', num2, '=', sum)
    if (sum === 0) {
      return [num1, num2]
    } else if (sum > 0) {
      right--
    } else {
      left++
    }
  }
}

function log(fn, arg) {
  console.log(arg, fn(arg))
}

log(sumZero, [-4, -3, -2, -1, 0, 1, 2, 5])
log(sumZero, [-2, 0, 1, 3])
log(sumZero, [1, 2, 3])
log(sumZero, [-4, -3, -2, -1, 0, 1, 2, 3, 10])
log(sumZero, [-4, -3, -2, -1, 0, 5, 10])
