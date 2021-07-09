function collectOddValues(arr) {
  if (arr.length === 0) return []

  const head = arr[0]
  const tail = arr.slice(1)

  if (head % 2 === 1) {
    return [
      head,
      ...collectOddValues(tail),
    ]
  }

  return collectOddValues(tail)
}

console.log(collectOddValues([1, 2, 3, 4, 5]))