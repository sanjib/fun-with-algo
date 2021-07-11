function selectionSort(arr) {
  let indexMin = 0
  let steps    = 0

  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      steps++
      if (arr[j] < arr[indexMin]) {
        indexMin = j
      }
    }

    if (i - 1 !== indexMin) {
      console.log(arr[i - 1], arr[indexMin])
      ;[arr[i - 1], arr[indexMin]] = [arr[indexMin], arr[i - 1]]
    }

    indexMin = i
  }

  console.log('--> steps:', steps)
  return arr
}

console.log(selectionSort([19, 44, 38, 5, 47, 15]))
console.log(selectionSort([34, 22, 10, 19, 17]))
console.log(selectionSort([0, 2, 34, 22, 10, 19, 17]))
