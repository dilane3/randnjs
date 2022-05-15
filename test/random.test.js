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

  test("Simple generation method with default min and max values", () => {
    expect(verification(Random.generate())).toBe(true)
    expect(typeof Random.generate() === 'number').toBe(true)
    expect(Random.generate()).toBeGreaterThan(Random.min)
    expect(Random.generate()).toBeLessThan(Random.max)
  })

  test("Simple generation method with custom min and max values", () => {
    const min = 0
    const max = 10
    const negativeMin = -100

    expect(() => Random.generate("a", "b")).toThrow("min and max parameters have to be numbers")
    expect(() => Random.generate(10, 4)).toThrow("max value has to be greater that min value")
    expect(verification(Random.generate(min, max), min, max)).toBe(true)
    expect(Random.generate(min, max)).toBeGreaterThan(min)
    expect(Random.generate(min, max)).toBeLessThan(max)
    expect(Random.generate(negativeMin, max)).toBeGreaterThan(negativeMin)
  })

  test("Generation of a list of numbers", () => {
    const min = 0
    const max = 100
    const length = 10

    // Generate a list of numbers
    const samples = Random.samples(length, min, max)

    expect(samples.length).toEqual(length)
    expect(samples.every(item => verification(item, min, max))).toBe(true)
    expect(() => Random.samples("a")).toThrow("length parameter has to be number")
  })

  test("Choose a value randomly from a list of elements", () => {
    const numbers = [1, 4, 6, 10, 12]
    const fruits = ["apple", "banana", "orange", "pineapple", "watermelon"]

    expect(numbers.includes(Random.choice(numbers))).toBe(true)
    expect(fruits.includes(Random.choice(fruits))).toBe(true)
    expect(() => Random.choice(1)).toThrow("The argument of choice() method has to be an array")
    expect(() => Random.choice([])).toThrow("The argument of choice() method must not be to be an empty array")
  })
})