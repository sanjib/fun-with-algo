function insertionSortCheckFromStart(arr) {
  for (let i = 1; i < arr.length; i++) {
    const val = arr[i]
    arr.splice(i, 1)

    let didInsert = false
    for (let j = 0; j < i; j++) {
      if (val < arr[j]) {
        arr.splice(j, 0, val)
        didInsert = true
        break
      }
    }
    if (didInsert === false) {
      arr.splice(i, 0, val)
    }
  }

  return arr
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const val = arr[i]

    let j = i - 1
    for (; j >= 0 && arr[j] > val; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = val
  }

  return arr
}

console.log(insertionSort([5, 3, 4, 1, 2]))
console.log(insertionSort([3, 44, 38, 5, 47, 15]))
console.log(insertionSort([2, 1, 9, 76, 4]))
