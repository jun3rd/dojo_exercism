//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// TEST passed: zero steps
// TEST passed: divide even
// TEST passed: even and odd
// TEST passed: large number, even and odd


export const steps = (posn) => {
  let st = 0 // steps
  // let maxst = 12 // max steps
  // 0.  12
  // 1.   6
  // 2.   3
  // 3.  10
  // 4.   5
  // 5.  16
  // 6.   8
  // 7.   4
  // 8.   2
  // 9.   1
  //
  let n = posn


  function collatzConjecture(n) {
    //console.log(`maxst: ${maxst}`) // test 12
    while (n > 1) {
      console.log(`st: ${st}`)
    //for(let x=0; x<maxst; x++) {
      //console.log(`x: ${x}`)
      if (n % 2 === 0) {
        console.log(`n/2: ${n}`)
        //return n / 2
        n = n / 2
        st = st + 1
      }
      else {
        console.log(`3n+1: ${n}`)
        //return 3 * n + 1
        n = 3*n + 1
        st = st + 1
      }
    }
  }


  if (n < 1) {
    throw new Error('Only positive numbers are allowed')
  }
  else if (n === 1) {
    return st
  } else {
    collatzConjecture(n)
    return st
  }

  //throw new Error('Remove this statement and implement this function');
};


