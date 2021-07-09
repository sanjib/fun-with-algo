function factorial(num) {
  let total = 1
  for (let i = num; i >= 2; i--) {
    total *= i
  }
  return total
}

console.log(factorial(5))
