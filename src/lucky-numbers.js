// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
    let arraySum = []
  let carryValue = 0
  let arraySumLength = 0
  let arrayLengthDifference = 0
  let sum = 0
  arrayLengthDifference = Math.abs(array1.length - array2.length)
  console.log('difference: ', arrayLengthDifference)
  if (array1.length > array2.length) {
    arraySumLength = array1.length
    for(let i=0; i<arrayLengthDifference; i++) {
      array2.unshift(0)
    }
  } else {
    arraySumLength = array2.length
    for(let i=0; i<arrayLengthDifference; i++) {
      array1.unshift(0)
    }
  }
  console.log('array1: ', array1)
  console.log('array2: ', array2)
  let yarra1 = array1.reverse()
  let yarra2 = array2.reverse()
  console.log('yarra1: ', yarra1)
  console.log('yarra2: ', yarra2)
  for (let i=0; i<arraySumLength; i++) {
    console.log('yarra1: ', yarra1[i])
    console.log('yarra2: ', yarra2[i])
    console.log('carryValue: ', carryValue)
    if ((yarra1[i] + yarra2[i] + carryValue) < 10) {
      console.log(yarra1[i] + " + " + yarra2[i] + " + "+ carryValue)
      arraySum.push(yarra1[i] + yarra2[i] + carryValue)
      carryValue = 0
    } else {
      arraySum.push(((yarra1[i] + yarra2[i]) - 10) + carryValue)
      carryValue = 1
    }
  }
  arraySum = arraySum.reverse()
  console.log('arraySum: ', arraySum)
  sum = Number(arraySum.join(''))
  return sum
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let valueString = value.toString()
  let valueArray = valueString.split('')
  let valueArrayReversed = valueArray.reverse(); console.log('array reversed: ', valueArrayReversed)
  let reversedString = valueArrayReversed.join("")
  let valueReversed = Number(reversedString); console.log('string reversed: ', valueReversed)
  return (valueReversed === value) ? true : false
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (
    input === '' ||
    input === null ||
    input === undefined
  ) { return 'Required field' }
  else if (
    isNaN(Number(input))
  ) {
    return 'Must be a number besides 0'
  }
  else if (
    (isNaN(Number(input)) === false)
    && (input === '0')
  ) {
    return 'Must be a number besides 0'
  }
  else {
    return ''
  }
}

