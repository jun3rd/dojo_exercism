// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let totalBirds = 0
  totalBirds = birdsPerDay.reduce((runningTotal, currentNumber) => {
    runningTotal = runningTotal + currentNumber
    return runningTotal
  })
  return totalBirds
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let birdCount = 0
  let startCount = (week - 1) * 7
  for(let i=startCount; i<(startCount+7); i++) {
    birdCount += birdsPerDay[i]
  }
  console.log('birds: ', birdCount)
  return birdCount
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  for(let i=0; i<birdsPerDay.length; i++) {
    if((i === 0) || (i%2 === 0)) {
      birdsPerDay[i] = birdsPerDay[i] + 1
    }
  }
  return birdsPerDay
}
