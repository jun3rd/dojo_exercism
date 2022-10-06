//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {

  constructor(side1,side2,side3) {
    this.side1 = side1  
    this.side2 = side2  
    this.side3 = side3  
    this.isEquilateral = this.isEquilateral.bind(this)
    this.isIsosceles = this.isIsosceles.bind(this)
    this.isScalene = this.isScalene.bind(this)
  }

  get isEquilateral() {
    console.log('checking equilateral')
    if (this.side1 === this.side2 && this.side2 === this.side3 && this.side3 === this.side1) {
      return true
    }
  }

  get isIsosceles() {
    console.log('checking isosceles')
    if((this.side1 === this.side2 && this.side1 === this.side3) ||
       (this.side2 === this.side3 && this.side2 === this.side1) ||
       (this.side3 === this.side1 && this.side3 === this.side2)) {
      return true
    }
  }

  get isScalene() {
    console.log('checking scalene')
    if((!this.isEquilateral(this.side1, this.side2, this.side3)) ||
       (!this.isIsosceles(this.side1, this.side2, this.side3))) {
      return false
    }
  }

}



