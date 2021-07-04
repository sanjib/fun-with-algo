const str = 'lorem ipsum'

const freq = str.split('')
  .reduce((freq, char) => {
    freq[char] === undefined ? freq[char] = 1 : freq[char]++
    return freq
  }, {})


console.log(freq)
