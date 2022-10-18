//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// TEST passed: extract row from 1-number matrix
// TEST passed: extract rows
// TEST passed: extract rows with different size numbers
// TEST passed: non-square matrix
// TEST passed: extract column from 1-number matrix


export class Matrix {
  constructor(matrix) {
    this.matrix = matrix
    this.currentMatrix = []
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
    let filler = []
    for(let x=0; x<width; x++) {
      filler.push(undefined)
    }
    for(let i=ary.length; i<width; i++) {
      ary.push(filler)
    }
    return ary
  }

  transposeSqr(currentSqr) {
    let transposed = currentSqr[0].map((_, outerColumnIndex) =>
      currentSqr.map(innerRow => innerRow[outerColumnIndex]))
    return transposed
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
      console.log('new row:')
      console.log(newRow)
      return newRow
    })
    return cleanedUpAry
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
    console.log(this.currentMatrix)
    return this.currentMatrix
  }
  // //currentAry = currentAry.map(ary => ary); //console.log(wideSqr)


  get rows() {
    console.log('_________________________________________________________')
    console.log(this.stringToMatrix())
    console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')
    return this.stringToMatrix()
  }

  get columns() {
    console.log('_________________________________________________________')
      this.stringToMatrix()
    console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')
    console.log('_________________________________________________________')
      let answer = this.squareArray(this.currentMatrix)
      console.log(answer)
    console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')
      answer = this.transposeSqr(this.currentMatrix)
      console.log(answer)
    console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')
    console.log('_________________________________________________________')
      answer = this.removeCruft(this.currentMatrix)
      console.log(answer)
    console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')
      return answer
  }

}


