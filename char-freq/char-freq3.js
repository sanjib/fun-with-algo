charCount('Your PIN number is 1234!')

function charCount(str) {
  const count = str.split('')
    .reduce((count, char) => {
      const lower = char.toLowerCase()
      count[lower] === undefined ? count[lower] = 1 : count[lower]++
      return count
    }, {})
  console.log(count)
}
