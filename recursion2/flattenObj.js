function flattenObj(val) {
  if (val.length === 0) return []

  // console.log('-->b', val)
  const arr = Object.values(val)
  // console.log('-->a', arr)

  if (typeof arr[0] === 'object') {
    if (Array.isArray(arr[0])) {
      return flattenObj([...arr[0], ...arr.slice(1)])
    } else {
      return flattenObj([...Object.values(arr[0]), ...arr.slice(1)])
    }
  }

  return [
    arr[0],
    ...flattenObj(arr.slice(1)),
  ]
}

console.log(flattenObj({
  a: 1,
  b: 2,
  c: [3, 4],
  d: [5],
  e: {
    f: [6],
    g: {
      h: [7, 8, 9],
    },
  },
}))

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

console.log(flattenObj(obj1)) // 6
console.log(flattenObj(obj2)) // 10