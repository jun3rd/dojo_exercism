//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (phrase) => {
  let alphabets = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  let includes_alphabets = []
  try {
    if (phrase.length === 0) {
      throw new Error(`>> test set: empty`)
    } else {
      alphabets.map(alphabet => {
        if (phrase.includes(alphabet) || phrase.includes(alphabet.toUpperCase())) { 
          includes_alphabets.push(alphabet)
        } else {
          throw new Error(`>> 1st missing letter: ${alphabet}`)
        }
      }) 
    }
    if (alphabets.length === includes_alphabets.length) { return true }
  } catch (error) {
    console.error(error)
    return false
  }
};
