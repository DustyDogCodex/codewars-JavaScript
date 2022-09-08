/* Write a function that will check if two given characters are the same case.

    If either of the characters is not a letter, return -1
    If both characters are the same case, return 1
    If both characters are letters, but not the same case, return 0

Examples

'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1
 */

function sameCase(a, b) {
  if (!(a.toLowerCase().charCodeAt(0) > 96 && a.toLowerCase().charCodeAt(0) < 123) || !(b.toLowerCase().charCodeAt(0) > 96 && b.toLowerCase().charCodeAt(0) < 123)) {
    return -1
  }
  if (a == a.toLowerCase() && b == b.toLowerCase()) {
    return 1
  } else if (a == a.toUpperCase() && b == b.toUpperCase()) {
    return 1
  } else {
    return 0
  }
}

/* Story

Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.
Task

Your mission:
Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".
Examples:

checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false
 */

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
}