//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// TEST passed: sound for 1
// TEST passed: sound for 3
// TEST passed: sound for 5
// TEST passed: sound for 7
// TEST passed: sound for 6
// TEST passed: sound for 8
// TEST passed: sound for 9
// TEST passed: sound for 10
// TEST passed: sound for 14
// TEST passed: sound for 15
// TEST passed: sound for 21
// TEST passed: sound for 25
// TEST passed: sound for 27
// TEST passed: sound for 35
// TEST passed: sound for 49


export const convert = (num) => {
  let raindrops = ""
  if (num % 3 === 0) {raindrops = raindrops + "Pling"}
  if (num % 5 === 0) {raindrops = raindrops + "Plang"}
  if (num % 7 === 0) {raindrops = raindrops + "Plong"}
  if ((num % 3 !== 0) && (num % 5 !== 0) && (num % 7 !== 0)) {
    raindrops = num.toString()
  }
  return raindrops
};

