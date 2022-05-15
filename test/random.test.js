// File for automatic testing of random class

// Import section
const Random = require("../src/index.js")
const Comparator = require("easy-comparator")

const compare = new Comparator()

describe("Random test", () => {
  /**
   * Verify if the value is included between min and max
   * @param {number} value 
   * @param {number} min 
   * @param {number} max 
   * @returns 
   */
  const verification = (value, min = Random.min, max = Random.max) => {
    return compare.lessThanOrEqual(value, max) && compare.greaterThanOrEqual(value, min)
  }

  test("Simple generate method", () => {
    expect(verification(Random.generate())).toBe(true)
    expect(typeof Random.generate() === 'number').toBe(true)
    expect(Random.generate()).toBeGreaterThan(Random.min)
    expect(Random.generate()).toBeLessThan(Random.max)
  })

  test("Simple generate method with custom min and max value", () => {
    const min = 0
    const max = 10

    expect(verification(Random.generate(min, max), min, max)).toBe(true)
    expect(Random.generate(min, max)).toBeGreaterThan(min)
    expect(Random.generate(min, max)).toBeLessThan(max)
  })
})