function validAnagram(src, target) {
  if (src === target) return true
  if (src.length !== target.length) return false

  const freq = src.split('').reduce((freq, char) => {
    freq[char] = ++freq[char] || 1
    return freq
  }, {})

  for (const char of target) {
    if (!freq[char] || freq[char] === 0) return false
    freq[char]--
  }

  return true
}

function log(fn, arg1, arg2) {
  console.log('\'' + arg1 + '\'', '\'' + arg2 + '\'', fn(arg1, arg2))
}

log(validAnagram, 'cinema', 'iceman')
log(validAnagram, '', '')
log(validAnagram, 'aaz', 'zza')
log(validAnagram, 'anagram', 'nagaram')
log(validAnagram, 'rat', 'car')
log(validAnagram, 'awesome', 'awesom')
log(validAnagram, 'qwerty', 'qeywrt')
log(validAnagram, 'texttwisttime', 'timetwisttext')
log(validAnagram, 'anagram', 'naga')
