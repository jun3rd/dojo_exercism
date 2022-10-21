//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// TEST passed: equilateral: all sides equal
// TEST passed: equilateral: any side unequal
// TEST passed: equilateral: no side equal
// TEST passed: zero side not triangle
// TEST passed: sides may be floats
// TEST passed: isosceles: last 2-sides equal
// TEST passed: isosceles: first 2-sides equal
// TEST passed: isosceles: first and last side equal
// TEST passed: isosceles: equilateral is isosceles
// TEST passed: isosceles: no sides equal
// TEST passed: isosceles: inequality violation 1
// TEST passed: isosceles: inequality violation 2
// TEST passed: isosceles: inequality violation 3
// TEST passed: float ok
// TEST passed: no sides equal


export class Triangle {

  constructor(side1,side2,side3) {
    this.side1 = side1  
    this.side2 = side2  
    this.side3 = side3  
    //this.isEquilateral = this.isEquilateral.bind(this)
    //this.isIsosceles = this.isIsosceles.bind(this)
    //this.isScalene = this.isScalene.bind(this)
  }

  checkZero() {
    if (this.side1 === 0 || this.side2 === 0 || this.side3 === 0) {
      return true
    }
    return false
  }

  get isEquilateral() {
    if (this.checkZero() === false) {
      console.log('checking equilateral')
      if (this.side1 === this.side2 && this.side2 === this.side3 && this.side3 === this.side1) {
        return true
      }
      else { return false }
    }
    else { return false }
  }

  get isIsosceles() {
    if (this.checkZero() === false) {
      console.log('checking isosceles')
      if ((this.side1 === this.side2 && this.side1 !== 1) || 
          (this.side2 === this.side3 && this.side2 !== 1) ||
          (this.side3 === this.side1 && this.side3 !== 1)) {
        return true
      }
      else { return false }
    }
    else { return false }
  }

  get isScalene() {
    if (this.checkZero() === false) {
      console.log('checking scalene')
      if (this.side1 !== this.side2 && 
          this.side1 !== this.side3 &&
          this.side2 !== this.side3) {
        return true
      }
      else { return false }
    }
    else { return false }
  }

}



