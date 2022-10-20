//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// TEST passed: zero steps
// TEST passed: divide even
// TEST passed: even and odd
// TEST passed: large number, even and odd
// TEST passed: zero ERROR
// TEST passed: negative value
// TESTS completed

export const steps = (posn) => {
  let st = 0 // steps
  let n = posn

  function collatzConjecture(n) {
    while (n > 1) {
      if (n % 2 === 0) {
        n = n / 2
        st = st + 1
      }
      else {
        n = 3*n + 1
        st = st + 1
      }
    }
  }

  if (n < 1) { throw new Error('Only positive numbers are allowed') }
  else if (n === 1) { return st } 
  else {
    collatzConjecture(n)
    return st
  }

};


