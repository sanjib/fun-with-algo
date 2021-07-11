function stringifyNumbers(obj) {
  if (obj.length === 0) return []
  if (Object.values(obj).length === 0) return {}

  if (Array.isArray(obj)) {
    return [
      typeof obj[0] === 'number' ? `${obj[0]}` : obj[0],
      ...stringifyNumbers(obj.slice(1)),
    ]
  }

  const key    = Object.keys(obj)[0]
  const val    = obj[key]
  const newObj = Object.assign({}, obj)
  delete newObj[key]

  if (typeof val === 'number') {
    return {
      [key]: `${val}`,
      ...stringifyNumbers(newObj),
    }
  }

  if (typeof val === 'object') {
    return {
      [key]: stringifyNumbers(val),
      ...stringifyNumbers(newObj),
    }
  }

  return {
    [key]: val,
    ...stringifyNumbers(newObj),
  }
}

console.log(stringifyNumbers({
  a: 1,
  b: [2, 5],
  c: {
    d: 3,
    e: {
      f: 'joe',
      i: 4,
    },
  },
  h: 'ho',
}))