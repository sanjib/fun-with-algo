function capitalizeWords(words) {
  if (words.length === 0) return []
  return [
    words[0].toUpperCase(),
    ...capitalizeWords(words.slice(1)),
  ]
}

let words = ['i', 'am', 'learning', 'recursion']
console.log(capitalizeWords(words)) // ['I', 'AM', 'LEARNING', 'RECURSION']
