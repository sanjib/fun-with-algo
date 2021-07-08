function areThereDuplicates(...args) {
  let uniq = {
    [args[0]]: true,
  }

  for (let i = 1; i < args.length; i += 2) {
    const curr = args[i]
    const next = args[i + 1]
    // console.log('uniq', uniq)
    // console.log('curr', curr)
    // console.log('next', next)
    if (uniq[curr] || uniq[next] || curr === next) return true
    uniq[curr] = true
    uniq[next] = true
  }
  return false
}

console.log(areThereDuplicates(1, 2, 3))
console.log('-------------------------')
console.log(areThereDuplicates(1, 2, 2))
console.log('-------------------------')
console.log(areThereDuplicates('a', 'b', 'c', 'a'))
