# randnjs 

JavaScript Library that handle some random operations on numbers and arrays 🔥🔥🔥

## Installation 

using **yarn**

```bash
  yarn add randnjs
```

using **npm**

```bash
  npm install randnjs
```

## Usage 

**Randnjs** offers you some magics methods 🌟 to handle random operations.
So now we will show you all these methods. Keep reading... 📖

### First step: Importation

You have to import the library first before using it. Do like this

```javascript
  import { Random } from 'randnjs'
```

or

```javascript
  const { Random } = require('randnjs')
```

### Second step: Use methods

1. Generate a random number

For doing this, you have to use the **generate()** method that **Random** class offers.

```javascript
  import { Random } from 'randnjs'

  console.log(Random.generate()) // Output: 100 for example...
```

This method can take two optional parameters (min and max values)

**Some parameters**

|Parameters    |Types       |Default value |Required |Description                         |
|---           |---         |----          |---      |---                                 |
|min           |number      |0             |no       |Minimum value that can be generated |
|max           |number      |100000000     |no       |Maximum value that can be generated |

So now you can specify the min and max value

```javascript
  import { Random } from 'randnjs'

  console.log(Random.generate(5, 10)) // Output: 7 for example...
```

2. Generate a list of numbers

To generate a list of numbers, you have to use the **samples()** method on the **Random** class.
It takes three optional parameters

**Some parameters**
|Parameters    |Types       |Default value |Required |Description                         |
|---           |---         |----          |---      |---                                 |
|length        |number      |1             |no       |Number of elements to generate      |
|min           |number      |0             |no       |Minimum value that can be generated |
|max           |number      |100000000     |no       |Maximum value that can be generated |

**Examples**

```javascript
  import { Random } from 'randnjs'

  const samples = Random.samples()

  console.log(samples) // output: [12345] for example
```

```javascript
  import { Random } from 'randnjs'

  const samples = Random.samples(5)

  console.log(samples) // output: [1, 100, 50, 12345, 243] for example
```

```javascript
  import { Random } from 'randnjs'

  const samples = Random.samples(5, 1, 10)

  console.log(samples) // output: [1, 10, 3, 6, 2] for example
```

3. Choose one element from a list of elements

To select randomly one element from a list of element, you have to use the **choice()** method that the **Random** class offers.

It takes one required parameter which is a non empty array of elements. Elements here can be numbers, strings, objects and so on...

**Some parameters**  
|Parameters    |Types       |Default value |Required |Description                                   |
|---           |---         |----          |---      |---                                           |
|array         |Array       |-             |yes      |Array of elements where we extract one element|

**Examples**

```javascript
  import { Random } from 'randnjs'

  const numbers = [1, 6, 10, 24, 15]

  const randomNumber = Random.choice(numbers)

  console.log(randomNumber) // Output: 6 for example
```

```javascript
  import { Random } from 'randnjs'

  const fruits = ['apple', 'banana', 'orange', 'pineapple', 'watermelon']

  const randomFruit = Random.choice(fruits)

  console.log(randomFruit) // Output: orange for example
```

That's all. Thank you 🙏...