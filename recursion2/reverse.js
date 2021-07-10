function reverse2(str) {
  return (function revHelper(reversed, tail) {
    if (tail.length === 0) return reversed
    return revHelper(tail[0] + reversed, tail.slice(1))
  })(str[0], str.slice(1))
}

function reverse(str) {
  if (str.length === 0) return str
  return reverse(str.slice(1)) + str[0]
}


console.log(reverse('awesome'))
console.log(reverse2('awesome'))

console.log(reverse('rithmschool')) // 'loohcsmhtir'
console.log(reverse2('rithmschool')) // 'loohcsmhtir'