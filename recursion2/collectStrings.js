function collectStrings(obj) {
  if (obj.length === 0) return []
  if (Object.keys(obj).length === 0) return {}

  const key    = Object.keys(obj)[0]
  const val    = obj[key]
  const newObj = { ...obj }
  delete newObj[key]

  if (typeof val === 'string') {
    return [
      val,
      ...Object.values(collectStrings(newObj)),
    ]
  }

  if (typeof val === 'object') {
    return {
      ...collectStrings(val),
      ...collectStrings(newObj),
    }
  }
}

const obj = {
  stuff: 'foo',
  data : {
    val: {
      thing: {
        info    : 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz',
          },
        },
      },
    },
  },
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"])