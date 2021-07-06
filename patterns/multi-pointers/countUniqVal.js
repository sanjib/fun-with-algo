function countUniqueValues(arr) {
  const res = arr.reduce((res, num) => {
    return num === res[1]
           ? [res[0], num]
           : [res[0] + 1, num]
  }, [0, undefined])
  return res[0]
}

function log(fn, arg) {
  console.log(arg, fn(arg))
}

log(countUniqueValues, [1, 1, 1, 1, 1, 2])
log(countUniqueValues, [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])
log(countUniqueValues, [])
log(countUniqueValues, [-2, -1, -1, 0, 1])
