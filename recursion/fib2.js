function fib(num) {
  if (num < 3) return 1
  return fib(num - 1) + fib(num - 2)
}

console.log(fib(4))
console.log(fib(10))
console.log(fib(28))
console.log(fib(35))