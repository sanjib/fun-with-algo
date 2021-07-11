function stringSearch(haystack, needle) {
  let count = 0

  loopHaystack:
    for (let i = 0; i < haystack.length; i++) {
      for (let j = 0; j < needle.length; j++) {
        if (needle[j] !== haystack[i + j]) continue loopHaystack
      }
      count++ // since the needle loop finished, there was a match
    }

  return count
}

console.log(stringSearch('harold said haha in hamburg', 'ha'))
console.log(stringSearch('wowomgzomg', 'omg'))
console.log(stringSearch('lorie loled', 'lol'))
console.log(stringSearch('lorie loled', 'lo'))
console.log(stringSearch('lorie loled', 'pop'))