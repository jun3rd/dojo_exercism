// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch(name) {
    case 'Pure Strawberry Joy': return 0.5; break;
    case 'Energizer': ;
    case 'Green Garden': return 1.5; break;
    case 'Tropical Island': return 3; break;
    case 'All or Nothing': return 5; break;
    default: return 2.5
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let wedgesNeeded_countdown = wedgesNeeded
  let wedgeSupply = 0
  let limesToCut = 0
  limes.forEach(lime => {
    if (wedgesNeeded_countdown > 0) {
      switch(lime) {
        case 'large':
          wedgeSupply += 10;
          limesToCut++;
          wedgesNeeded_countdown -= 10;
          break;
        case 'medium':
          wedgeSupply += 8;
          limesToCut++;
          wedgesNeeded_countdown -= 8;
          break;
        case 'small':
          wedgeSupply += 6;
          limesToCut++;
          wedgesNeeded_countdown -= 6;
          break;
        default: 0
      }
    }
  })
  return limesToCut
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let drinkPrepTime = {
    'Pure Strawberry Joy': 0.5,
    'Energizer': 1.5,
    'Green Garden': 1.5,
    'Tropical Island': 3,
    'All or Nothing': 5,
    'other': 2.5
  }

  let totalDrinkPrepTime = 0
  let drinksToMake = []
  let remainingOrders = []

  orders.forEach(drink => {
    if(totalDrinkPrepTime < timeLeft) {
      if(drink in drinkPrepTime) {
        totalDrinkPrepTime += drinkPrepTime[drink];
        drinksToMake.push(drink);
      } else {
        totalDrinkPrepTime += drinkPrepTime['other'];
        drinksToMake.push(drink);
      }
    } else {
      remainingOrders.push(drink);
    }
  })

  return remainingOrders
}
