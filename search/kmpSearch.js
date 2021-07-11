import expect from 'expect'

function kmpSearch(haystack, needle) {
  const pi = piTable(needle)
  console.log('pi:', pi)

  let iterations = 0
  let matchCount = 0

  let i = 0
  let j = 0
  loop1:
    for (; i < haystack.length; i++) {
      for (; j < needle.length; j++) {
        console.log({ 'i': i, 'j': j, 'hay': haystack[i + j], 'ndl': needle[j] })
        if (haystack[i + j] !== needle[j]) {
          console.log('-')
          continue loop1
        }
      }
      j = 0
    }

  return matchCount
}

function piTable(pattern) {
  const pi = [-1]

  let start = 0
  for (let i = 0; i < pattern.length; i++) {
    if (i !== 0 && pattern[start] === pattern[i]) {
      pi.push(pi[pi.length - 1] + 1)
      start++
    } else {
      start = 0
      pi.push(0)
    }
  }

  return pi
}

console.log(kmpSearch('hello', 'el'))

// expect(piTable('ha')).toStrictEqual([-1, 0, 0])
// expect(piTable('abcxxxabcy')).toStrictEqual([-1, 0, 0, 0, 0, 0, 0, 1, 2, 3, 0])
//
// expect(piTable('abcdabeabf')).toStrictEqual([-1, 0, 0, 0, 0, 1, 2, 0, 1, 2, 0])
// expect(piTable('abcdeabfabc')).toStrictEqual([-1, 0, 0, 0, 0, 0, 1, 2, 0, 1, 2, 3])
// expect(piTable('aabcadaabe')).toStrictEqual([-1, 0, 1, 0, 0, 1, 0, 1, 2, 3, 0])
// expect(piTable('aaaabaacd')).toStrictEqual([-1, 0, 1, 2, 3, 0, 1, 2, 0, 0])

// console.log(kmpSearch('---abcxxxab-----------', 'abcxxxabcy'))


// console.log(kmpSearch('harold said haha in hamburg', 'haha'))
// console.log(kmpSearch('wowomgzomg', 'omg'))
// console.log(kmpSearch('lorie loled', 'lol'))
// console.log(kmpSearch('lorie loled', 'lo'))
// console.log(kmpSearch('lorie loled', 'pop'))


// console.log('-- all good, no errors --')