function countDown(num) {
  if (num <= 0) { // base case
    console.log('all done!')
    return
  }
  console.log(num)
  num--
  countDown(num)
  console.log('cool down...')
}

countDown(3)
