function fib(num) {
  return (function fibHelper(num, seq) {
    if (num === 0) return seq[0]
    if (num === 1) return seq[1] // countdown up to 1 not 0
    return fibHelper(num - 1, [
      seq[1],
      seq[0] + seq[1],
    ])
  })(num, [0, 1])
}

console.log(fib(0))
console.log(fib(4))
console.log(fib(10))
console.log(fib(35))
