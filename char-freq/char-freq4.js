function charCount(str) {
  const freq = str.split('').reduce((freq, char) => {
    char = char.toLowerCase()

    // only include alpha numeric
    if (/[a-z0-9]/.test(char)) {
      freq[char] = ++freq[char] || 1
    }

    return freq
  }, {})

  console.log(freq)
}

charCount('Hello hi!')
