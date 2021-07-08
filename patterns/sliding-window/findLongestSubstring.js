function findLongestSubstring(str) {
  const len = []

  let left  = 0
  let right = 0
  let chars = {} // will contain the index of each char

  while (right < str.length) {
    let char
    if (left === right) {
      char = str[left]
    } else {
      char = str[right]
    }

    if (chars[char]) {
      len.push(Object.keys(chars).length)
      left  = chars[char] + 1 // set the index to the last found char + 1
      right = left
      chars = {}
      continue
    }

    chars[char] = right
    right++

    // if we reached the end of string, then record the length
    if (right === str.length) len.push(Object.keys(chars).length)
  }

  return len.length > 0 ? Math.max(...len) : 0
}

function log(fn, str) {
  console.log(str, '-->', fn(str))
}

log(findLongestSubstring, '')
log(findLongestSubstring, 'rithmschool')
log(findLongestSubstring, 'thisisawesome')
log(findLongestSubstring, 'thecatinthehat')
log(findLongestSubstring, 'bbbbbb')
log(findLongestSubstring, 'longestsubstring')
log(findLongestSubstring, 'thisishowwedoit')
