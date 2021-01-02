// Counts the frequency of characters in a word or sentence.
// Does not ignore spaces, special characters and symbols.

// const word = 'The quick brown fox jumped over the lazy dog.'
const word = '😊😎😎🤗'

// 1. Iterate and store the frequency
const charCount = {}
for (const char of word) {
  if (charCount[char]) charCount[char] += 1
  else charCount[char] = 1
}

// 2. Sort keys, use localeCompare for languages other than English
const chars = Object.keys(charCount)
chars.sort((a, b) => a.localeCompare(b))

// 3. Print out the frequency
chars.forEach(char => {
  console.log(`${char}: ${charCount[char]}`)
})
