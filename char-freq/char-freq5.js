function charCount1(str) {
  const freq = str.split('').reduce((freq, char) => {
    char = char.toLowerCase()
    if (isAlphaNumeric1(char)) {
      freq[char] = ++freq[char] || 1
    }
    return freq
  }, {})
  console.log(freq)
}

function charCount2(str) {
  const freq = str.split('').reduce((freq, char) => {
    char = char.toLowerCase()
    isAlphaNumeric2(char) && (freq[char] = ++freq[char] || 1)
    return freq
  }, {})
  console.log(freq)
}

function isAlphaNumeric1(char) {
  const code = char.charCodeAt(0)
  if (!(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)) {
    return false
  }
  return true
}

function isAlphaNumeric2(char) {
  const code = char.charCodeAt(0)
  return (code > 47 && code < 58) ||
    (code > 64 && code < 91) ||
    (code > 96 && code < 123)
}

charCount1('Hello hi 123!')
charCount2('Hello hi 123!')