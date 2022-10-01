//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (text_input) => {
  let text_array = []
  if(text_input.length === 0) { return "" }
  else { 
    text_array = [...text_input]
    text_array = text_array.reverse()
  }
  return text_array.join("")
};
