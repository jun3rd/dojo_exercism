//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// TEST passed: extract row from 1-number matrix
// TEST passed: extract rows
// TEST passed: extract rows with different size numbers
// TEST passed: non-square matrix
// TEST passed: extract column from 1-number matrix
// TEST passed: extract columns
// TEST passed: extract columns from non-square, no corresponding rows
// TEST passed: extract columns from non-square, long rows, short columns
// TEST passed: extract columns different width numbers


export class Matrix {
  constructor(matrix) {
    this.matrix = matrix
    this.currentMatrix = []
  }

  stringToMatrix() {
    let array_of_strings = this.matrix.split("\n")
    let array_of_string_rows = array_of_strings.map(str => {
      let str_row = str.split(" ")
      let str_row_num = str_row.map(ltr => {
        return Number(ltr)
      })
      this.currentMatrix.push(str_row_num)
      return str_row_num
    })
    return this.currentMatrix
  }

  findWidestElement(ary) {
    let longestWidth = 0
    ary.forEach(el => {
      if( el.length > longestWidth ) {
        longestWidth = el.length
      }
    })
    return longestWidth
  }

  // fill gaps inside each array with "undefined"-padding
  squareArray(ary) {
    let width = this.findWidestElement(ary)
    if(width === ary.length) {
      return ary
    }
    else {
      let filler = []
      for(let x=0; x<width; x++) {
        filler.push(undefined)
      }
      for(let i=ary.length; i<width; i++) {
        ary.push(filler)
      }
      return ary
    }
  }

  transposeSqr(currentSqr) {
    let transposed = currentSqr[0].map((_, outerColumnIndex) =>
      currentSqr.map(innerRow => innerRow[outerColumnIndex]))
    this.currentSqr = transposed
    return this.currentSqr
  }

  removeCruft(currentSqr) {
    let cleanedUpAry = []
    cleanedUpAry = currentSqr.map(row => {
      let newRow = row.filter(element => {
        if (element === undefined) {
          console.log('FOUND undefined')
        }
        else {
          return element
        }
      })
      return newRow
    })
    this.currentMatrix = cleanedUpAry
    return cleanedUpAry
  }

  removeEmptyRows(currentMatrix) {
    let filledRows = currentMatrix.filter(row => {
      if (row.length === 0) {
        console.log('FOUND empty row')
      } else {
        return row
      }
    })
    this.currentMatrix = filledRows
    return this.currentMatrix 
  }

  get rows() {
    return this.stringToMatrix()
  }

  get columns() {
    this.stringToMatrix()
    this.currentMatrix = this.squareArray(this.currentMatrix)
    this.currentMatrix = this.transposeSqr(this.currentMatrix)
    this.currentMatrix = this.removeCruft(this.currentMatrix)
    this.currentMatrix = this.removeEmptyRows(this.currentMatrix)
    console.log(this.currentMatrix)
    return this.currentMatrix 
  }

}


