// sub: substring to check for
// src: the source full string
function isSubsequence(sub, src) {
  let next = 0

  for (const c of src) {
    if (c === sub[next]) {
      next++
    }
    if (next === sub.length) return true
  }

  return false
}

function log(fn, sub, src) {
  console.log(sub, ',', src, '-->', fn(sub, src))
}

log(isSubsequence, 'hello', 'hello world') // true
log(isSubsequence, 'sing', 'sting')        // true
log(isSubsequence, 'abc', 'abracadabra')   // true
log(isSubsequence, 'abc', 'acb')           // false
