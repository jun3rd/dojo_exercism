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


export const convert = (num) => {
  let raindrops = ""
  if (num % 3 === 0) {
    raindrops += 'Pling'
  }
  else if (num % 5 === 0) {
    raindrops += 'Plang'
  }
  else if (num % 7 === 0) {
    raindrops += 'Plong'
  }
  else {
    raindrops = num.toString()
  }
  console.log(raindrops)
  return raindrops
};

