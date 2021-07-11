function nestedEvenSum(val) {
  if (val.length === 0) return []
  const arr = Object.values(val)

  if (typeof arr[0] === 'object') {
    if (Array.isArray(arr[0])) {
      return nestedEvenSum([...arr[0], ...arr.slice(1)])
    } else {
      return nestedEvenSum([...Object.values(arr[0]), ...arr.slice(1)])
    }
  }

  if (typeof arr[0] === 'number') {
    if (arr[0] % 2 === 0) {
      return arr[0] + Number(nestedEvenSum(arr.slice(1)))
    }
  }

  return nestedEvenSum(arr.slice(1))
}

const obj1 = {
  outer: 2,
  obj  : {
    inner   : 2,
    otherObj: {
      superInner    : 2,
      notANumber    : true,
      alsoNotANumber: 'yup',
    },
  },
}

const obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' },
}

console.log(nestedEvenSum({ a: 2, b: 2, c: 3, d: 4 })) // 8
console.log(nestedEvenSum(obj1)) // 6
console.log(nestedEvenSum(obj2)) // 10