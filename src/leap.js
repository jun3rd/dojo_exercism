//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = (year) => {
  let isLeapYear = false
  if (year%4 === 0) {
    console.log('div by 4')
    isLeapYear = true
    if (year%100 === 0) {
      console.log('NOT by 100')
      isLeapYear = false
      if (year%400 === 0) {
        console.log('EXCEPTION 400')
        isLeapYear = true
      }
    }
  }
  return isLeapYear
};
