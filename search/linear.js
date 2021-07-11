function searchRec(arr, item) {
  const search = function (arr, index) {
    if (arr.length === 0) return -1
    if (arr[0] === item) return index
    index++
    return search(arr.slice(1), index)
  }
  return search(arr, 0)
}

function searchImp(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) return i
  }
  return -1
}

const cars = ['Saab', 'Volvo', 'BMW', 'Toyota', 'Ford',
              'Nissan', 'Fiat', 'Audi', 'Porsche', 'Honda']
console.log(searchRec(cars, 'BMW'))
console.log(searchImp(cars, 'BMW'))
