function binarySearch(arr, targetVal) {
  let left  = 0
  let right = arr.length - 1

  while (left <= right) {
    const index      = Math.floor((left + right) / 2)
    const currentVal = arr[index]

    if (targetVal === currentVal) return index

    targetVal < currentVal
    ? right = index - 1 // targetVal on left side : so collapse right
    : left = index + 1  // targetVal on right side: so collapse left
  }

  return -1
}

const arr  = [1, 2, 3, 4, 5]
const arr2 = [5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
              40, 44, 64, 79, 84, 86, 95, 96, 98, 99]
console.log(binarySearch(arr, 2)) // 1
console.log(binarySearch(arr, 3)) // 2
console.log(binarySearch(arr, 5)) // 4
console.log(binarySearch(arr, 6)) // -1

console.log(binarySearch(arr2, 10))
console.log(binarySearch(arr2, 95))
console.log(binarySearch(arr2, 100))