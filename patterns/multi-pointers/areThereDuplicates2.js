function areThereDuplicates() {
  return (new Set(arguments)).size !== arguments.length
}

console.log(areThereDuplicates(1, 2, 3))
console.log('-------------------------')
console.log(areThereDuplicates(1, 2, 2))
console.log('-------------------------')
console.log(areThereDuplicates('a', 'b', 'c', 'a'))
