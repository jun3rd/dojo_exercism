//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// TEST passed: equilateral: all sides equal
// TEST passed: equilateral: any side unequal
// TEST passed: equilateral: no side equal
// TEST passed: zero side not triangle
// TEST passed: sides may be floats


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
      if((this.side1 === this.side2 && this.side1 === this.side3) ||
         (this.side2 === this.side3 && this.side2 === this.side1) ||
         (this.side3 === this.side1 && this.side3 === this.side2)) {
        return true
      }
      else { return false }
    }
    else { return false }
  }

  get isScalene() {
    if (this.checkZero() === false) {
      console.log('checking scalene')
      if((!this.isEquilateral(this.side1, this.side2, this.side3)) ||
         (!this.isIsosceles(this.side1, this.side2, this.side3))) {
        return false
      }
      else { return true }
    }
    else { return false }
  }

}



