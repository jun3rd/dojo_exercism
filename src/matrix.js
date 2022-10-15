//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// TEST passed: extract from 1 number matrix
// TEST passed: extract rows
// TEST passed: extract rows with different size numbers
// TEST passed: non-square matrix

export class Matrix {
  constructor(matrix) {
    this.matrix = matrix
    this.mtx = []
  }

  get rows() {
    let array_of_strings = this.matrix.split("\n")
    let array_of_string_rows = array_of_strings.map(str => {
      let str_row = str.split(" ")
      let str_row_num = str_row.map(ltr => {
        return Number(ltr)
      })
      this.mtx.push(str_row_num)
      return str_row_num
    })
    return this.mtx
  }

  get columns() {
    let array_of_strings = this.matrix.split("\n")

    let str_column_num = array_of_strings.map(ltr => {
      return Number(ltr)
    })
    this.mtx.push(str_column_num)
    return this.mtx
  }
}



