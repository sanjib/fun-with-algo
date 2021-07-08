function sameFreq(num1, num2) {
  const num1Arr = (num1).toString().split('')
  const num2Arr = (num2).toString().split('')

  // length must be same to ensure same frequency
  if (num1Arr.length !== num2Arr.length) return false

  const freq = num1Arr.reduce((freq, n) => {
    freq[n] = ++freq[n] || 1
    return freq
  }, {})

  for (const n of num2Arr) {
    if (!freq[n] || freq[n] === 0) {
      return false
    }
    freq[n]--
  }

  return true
}

function log(fn, num1, num2) {
  console.log(num1, num2, '-->', fn(num1, num2))
}

log(sameFreq, 182, 281)
log(sameFreq, 34, 14)
log(sameFreq, 3589578, 5879385)
log(sameFreq, 22, 222)
log(sameFreq, 112233, 123)
log(sameFreq, 123, 112233)