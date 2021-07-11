function bubbleSortNotOpimized(arr) {
  let steps = 0
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) { // j < i ensures last element isn't traversed
      steps++
      if (arr[j] > arr[j + 1])
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
    }
  }
  console.log('--> steps:', steps)
  return arr
}

function bubbleSort(arr) {
  let steps = 0

  for (let i = arr.length - 1; i >= 0; i--) {
    let noSwaps = true

    for (let j = 0; j < i; j++) { // j < i ensures last element isn't traversed
      steps++
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]

        noSwaps = false
      }
    }
    if (noSwaps) break
  }
  console.log('--> steps:', steps)
  return arr
}

console.log(bubbleSort([3, 1, 6, 21, 9, 65, 8, 4]))
console.log(bubbleSort([37, 45, 29, 8, 12, 88, -3]))
console.log(bubbleSort([1, 2, 3, 4, 5, 8, 6, 7]))
console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]))