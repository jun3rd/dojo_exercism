//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


// TEST passed: anniversary since midnight
// TEST passed: another anniversary date since midnight
// TEST passed: another anniversary date since midnight, before Unix Epoch
// TEST passed: tells anniversary, including a time
// TEST passed: tells anniversary is next day, if born at night

export const gigasecond = (intime) => {
  let gsec = 1000000000

  let intime_copy = new Date(intime.valueOf()) // copy, NOT modify original
  let outseconds = Math.floor(intime_copy.getTime() / 1000)
  let answer = new Date((outseconds + gsec)*1000)
  return answer
};
