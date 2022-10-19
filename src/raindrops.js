//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// TEST passed: sound for 1


export const convert = (num) => {
  let raindrops = ""
  if (num % 3 === 0) {
    raindrops.concat('Pling')
  }
  else if (num % 5 === 0) {
    raindrops.concat('Plang')
  }
  else if (num % 7 === 0) {
    raindrops.concat('Plong')
  }
  else {
    raindrops = num.toString()
  }
  return raindrops
};

