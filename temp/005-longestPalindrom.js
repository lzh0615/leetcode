/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length < 2) return s

  let res = ''

  for (let i = 0; i < s.length; i++) {
    let res1 = palindrome(s, i, i)
    let res2 = palindrome(s, i, i + 1)
    res = res.length > res1.length ? res : res1
    res = res.length > res2.length ? res : res2

  }
  return res

};

function palindrome (s, r, l) {
  while (l >= 0 && r < s.length && s[l] === s[r]) {
    l--
    r++
  }
  return s.substr(l + 1, r - l - 1)
}

export default longestPalindrome
