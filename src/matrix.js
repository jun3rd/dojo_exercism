//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// TEST passed: extract from 1 number matrix

export class Matrix {
  constructor(matrix) {
    this.matrix = matrix
    this.mtx = []
  }

  get rows() {
    console.log(this.matrix)
    let array_of_strings = this.matrix.split("")
    let array_of_nums = array_of_strings.map(num => {
      return Number(num)
    })
    console.log(array_of_strings)
    console.log(array_of_nums)
    this.mtx.push(array_of_nums)
    return this.mtx
  }

  get columns() {
    throw new Error('Remove this statement and implement this function');
  }
}
