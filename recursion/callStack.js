function takeShower() {
  return 'showering...'
}

function eatBreakfast() {
  const meal = cookFood()
  return `eating ${meal}...`
}

function cookFood() {
  const items = ['eggs', 'bacon', 'cheese', 'salami', 'pastrami']
  return items[Math.floor(Math.random() * items.length)]
}

function wakeUp() {
  console.log(takeShower())
  console.log(eatBreakfast())
  console.log('ok, ready to roll...')
}

wakeUp()
