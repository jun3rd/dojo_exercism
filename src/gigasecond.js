//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (intime) => {
  let gsec = 1000000000

  let intime_copy = new Date(intime.valueOf()) // copy, NOT modify original
  let outseconds = Math.floor(intime_copy.getTime() / 1000)
  console.log(intime)
  console.log(intime_copy)
  console.log(outseconds + gsec)
  console.log(new Date((outseconds + gsec)*1000))
  let answer = new Date((outseconds + gsec)*1000)
  //return intime_copy
  return answer
};
