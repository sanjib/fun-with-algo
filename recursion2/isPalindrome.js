function isPalindrome(strInput) {
  const str = strInput.replace(/[\s+\.\,\'’\?]/g, '').toLowerCase()
  if (str.length === 1 || str.length === 0) return true
  return str[0] === str[str.length - 1] && isPalindrome(str.slice(1, str.length - 1))
}

function log(fn, str) {
  console.log(str, '-->', fn(str))
}

log(isPalindrome, 'noon')
log(isPalindrome, 'civic')
log(isPalindrome, 'level')
log(isPalindrome, 'radar')
log(isPalindrome, 'taco cat')
log(isPalindrome, 'Aibohphobia')
log(isPalindrome, 'Was it a car or a cat I saw')
log(isPalindrome, 'Too bad I hid a boot')
log(isPalindrome, 'Mr. Owl ate my metal worm')
log(isPalindrome, 'Eva, can I stab bats in a cave?')
log(isPalindrome, 'No, Mel Gibson is a casino’s big lemon')
log(isPalindrome, 'Racecar')
log(isPalindrome, 'Deified')
log(isPalindrome, 'Minim')
log(isPalindrome, 'Murdrum')
log(isPalindrome, 'Repaper')
log(isPalindrome, 'Lemel')
log(isPalindrome, 'Rotavator')
log(isPalindrome, 'Solos')
log(isPalindrome, 'Refer')
log(isPalindrome, 'Sagas')
log(isPalindrome, 'Tenet')
log(isPalindrome, 'Madam')
log(isPalindrome, 'Mom')
log(isPalindrome, 'Wow')
log(isPalindrome, 'Rotator')
log(isPalindrome, 'foobar')
