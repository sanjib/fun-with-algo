function flatten(arr) {
  if (arr.length === 0) return []
  return arr[0].length
         ? [...flatten(arr[0]), ...flatten(arr.slice(1))]
         : [arr[0], ...flatten(arr.slice(1))]
}

console.log(flatten([1, 2, 3]))
console.log(flatten([1, 2, 3, [4, 5]]))
console.log(flatten([1, 2, 3, [4, 5]])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]
