// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 **/

/**
 *
 * simulate a windowing based operating system
 *
 *      <------------------  screenSize.width  --------------------->
 *
 *      ^           +-----------------------------------------------+
 *      |           |                                               |
 *      |           |   position.x, _                               |
 *      |           |   position.y   \ <----- size.width ----->     |
 *      |           |                 \                             |
 *      |           |         ^        *----------------------,     |
 *      |           |         |        |                      |     |
 *      |           |         |        |        title         |     |
 *      |           |         |        |----------------------|     |
 *      |           |         |        |                      |     |
 *      |           |    size.height   |                      |     |
 *      |           |         |        |                      |     |
 *  screenSize.     |         |        |       contents       |     |
 *   height         |         |        |                      |     |
 *      |           |         |        |                      |     |
 *      |           |         |        |                      |     |
 *      |           |         |        |______________________|     |
 *      |           |         v                                     |
 *      |           |                                               |
 *      |           |                                               |
 *      |           |                                               |
 *      |           |                                               |
 *      |           |                                               |
 *      |           |                                               |
 *      |           |                                               |
 *      v           |_______________________________________________|
 *
 *
 **/


/**
 *
 * Solve task-1 & task-2 using prototype syntax; remaining tasks use class syntax
 *
 **/


export function Size (width=80, height=60) {
	this.width = width;
	this.height = height;
}

Size.prototype.resize = function (newWidth, newHeight) {
	this.width = newWidth;
	this.height = newHeight;
}


export function Position (x=0, y=0) {
	this.x= x;
	this.y= y;
}

Position.prototype.move = function (newX, newY) {
	this.x= newX;
	this.y= newY;
}

export class ProgramWindow {
	constructor() {
		this.screenSize = new Size(800,600)
		this.size = new Size
		this.position = new Position
	}

	resize(requested_size) {
		let minWidth = 1
		let minHeight = 1
		let screenWidth = 800
		let screenHeight = 600
		let maxWidth
		let maxHeight
		
		if(requested_size.width < 1) {
			requested_size.width = 1
		}

		if(requested_size.height < 1) {
			requested_size.height = 1
		}

		maxWidth = screenWidth - this.position.x
		maxHeight = screenHeight - this.position.y

		if (requested_size.width < maxWidth || requested_size.width === maxWidth) {
			this.size.width = requested_size.width
		} else {
			this.size.width = maxWidth
		}

		if (requested_size.height < maxHeight || requested_size.height === maxHeight) {
			this.size.height = requested_size.height
		} else {
			this.size.height = maxHeight
		}
	}

	move(requested_position) {
		let minX = 0
		let minY = 0
		let screenWidth = 800
		let screenHeight = 600
		let maxX
		let maxY
		
		if(requested_position.x < 0) {
			requested_position.x = 0
		}

		if(requested_position.y < 0) {
			requested_position.y = 0
		}

		maxX = screenWidth - this.size.width
		maxY = screenHeight - this.size.height

		if (requested_position.x < maxX || requested_position.x === maxX) {
			this.position.x = requested_position.x
		} else if (requested_position.x > maxX) {
			this.position.x = maxX
		}

		if (requested_position.y < maxY || requested_position.y === maxY) {
			this.position.y = requested_position.y
		} else if (requested_position.y > maxY) {
			this.position.y = maxY
		}

	}
}

export function changeWindow(programWindow) {
	console.log(programWindow)

	programWindow.size.width = 400;
	programWindow.size.height = 300;
	programWindow.position.x = 100;
	programWindow.position.y = 150;
	
	
	console.log(programWindow)

	return programWindow
}



