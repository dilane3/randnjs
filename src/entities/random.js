// Entity for managing numbers generation

class Random {
  /**
   * Min value that can be generated
   */
  static min = 0

  /**
   * Max value that can be generated
   */
  static max = 100000000

  /**
   * Type of value that can be generated
   */
  static type = "number"

  // Static Methods list

  /**
   * Generate value between 0 and 1, with 1 excluded
   * @returns number
   */
  static initialValueGenerated () { 
    return Math.random()
  }

  /**
   * Generate number contained between min and max values
   * @param {number} min 
   * @param {number} max 
   * @returns number
   */
  static generate (min = this.min, max = this.max) {
    if (typeof min === "number" && typeof max === "number") {
      return Math.floor(this.initialValueGenerated() * max + 1) + min
    }

    throw new Error("min and max parameters have to be numbers")
  }

  /**
   * Generate a list of numbers
   * @param {number} length 
   * @param {number} min 
   * @param {number} max 
   * @returns number
   */
  static samples (length = 1, min = this.min, max = this.max) {
    if (typeof length === "number") {
      // Initial list of numbers
      const list = []

      for (let i=0; i<length; i++) {
        // Generate a number
        const randomValue = this.generate(min, max)

        list.push(randomValue)
      }

      return list
    }

    throw new Error("length parameter has to be number")
  }

  /**
   * Choose a value from a list of values
   * @param {Array} array 
   * @returns number
   */
  static choice (array) {
    if (array instanceof Array) {
      if (array.length > 0) {
        const minIndex = 0
        const maxIndex = array.length - 1
  
        // Generate random index included between minIndex and maxIndex
        const randomIndex = this.generate(minIndex, maxIndex)
  
        return array[randomIndex]
      }

      throw new Error("The argument of choice() method must not be to be an empty array")
    } else {
      throw new Error("The argument of choice() method has to be an array")
    }
  }
}

module.exports = Random 