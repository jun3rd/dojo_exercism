//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// TEST passed: empty rna sequence
// TEST passed: G to C
// TEST passed: C to G
// TEST passed: T to A

export const toRna = (sequence) => {
  if (sequence.length > 0) {
    let sq = sequence.slice().split("")
    let new_sequence = sq.map(ltr => {
      switch(ltr) {
        case 'G': return 'C'; break;
        case 'C': return 'G'; break;
        case 'T': return 'A'; break;
        case 'A': return 'U'; break;
        default: break;
      }
    })
    return new_sequence.join("")
    }
  else { return '' }
};
