//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (strand1, strand2) => {
  let s1 = strand1.split("")
  let s2 = strand2.split("")
  let hamming_distance = 0
  if (strand1.length !== strand2.length) {
    throw "strands must be of equal length"
  } else {
    if (strand1.length === 0 || strand2.length === 0) {
      return hamming_distance
    } else {
      let mistake_indexes = s1.map((dna_letter, idx) => {
        if (dna_letter === s2[idx]) {
          return true
        } else {
          hamming_distance++
          return false
        }
      }) 
    }
    return hamming_distance
  }
};

