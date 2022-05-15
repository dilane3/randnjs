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
    return Math.floor(this.initialValueGenerated() * max + 1) + min
  }
}

module.exports = Random 