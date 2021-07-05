// values in arr1 equals values squared in arr2
// frequency matters, order does not matter
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false

  const squares = arr1.reduce((squares, num) => {
    squares[num * num] = ++squares[num * num] || 1
    return squares
  }, {})

  for (const num of arr2) {
    if (!squares[num] || squares[num] === 0) {
      return false
    }
    squares[num]--
  }
  return true
}

console.log(same([1, 2, 3], [4, 1, 9])) // true
console.log(same([1, 2, 3], [1, 9]))    // false
console.log(same([1, 2, 1], [4, 4, 1])) // false (must be same frequency)
console.log(same([1, 2, 1], [4, 1, 1])) // true (must be same frequency)