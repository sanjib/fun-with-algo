function sumZero(arr) {

  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length - 1; j > i; j--) {
      console.log(arr[i], arr[j])
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]]
      }
    }
  }

  return undefined
}

function log(fn, arg) {
  console.log(arg, fn(arg))
}

log(sumZero, [-3, -2, -1, 0, 1, 2, 3])
log(sumZero, [-2, 0, 1, 3])
log(sumZero, [1, 2, 3])
log(sumZero, [-4, -3, -2, -1, 0, 1, 2, 5])
