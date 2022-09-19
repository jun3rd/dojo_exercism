// @ts-check

// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Build a sign that includes both of the parameters.
 *
 * @param {string} occasion
 * @param {string} name
 *
 * @returns {string} template string combining both parameters
 */

export function buildSign(occasion, name) {
  let sign = `Happy ${occasion} ${name}!`
  return sign
}

/**
 * Build a birthday sign that conditionally formats the return string.
 *
 * @param {number} age
 *
 * @returns {string} template string based on age
 */

export function buildBirthdaySign(age) {
  let sign = ''
  let age_adjective = {older: 'mature', younger: 'young'}
  if((age > 50) || (age === 50)) {
    sign = `Happy Birthday! What a ${age_adjective.older} fellow you are.`
  } else {
    sign = `Happy Birthday! What a ${age_adjective.younger} fellow you are.`
  }
  return sign
}

/**
 * Build a graduation sign that includes multiple lines.
 *
 * @param {string} name
 * @param {number} year
 *
 * @returns {string} multi-line template string
 */

export function graduationFor(name, year) {
  let sign = `Congratulations ${name}!\nClass of ${year}`
  return sign
}

/**
 * Determine cost based on each character of sign parameter that builds
 * the template string that includes the currency parameter.
 *
 * @param {string} sign
 * @param {string} currency
 *
 * @returns {string} cost to create the sign
 */

export function costOf(sign, currency) {
  let base_price = 20
  let letter_price = 2
  let cost = ((sign.length * letter_price) + base_price).toFixed(2)
  let receipt = `Your sign costs ${cost} ${currency}.`
  return receipt
}
