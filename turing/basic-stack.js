// basic stack

// push an element onto the stack -> is an array
const nums = [44, 7, 99, 10, 12]

const push = (num, arr) => {
  //concat
  //spread
  return arr.concat(num)
}
console.log(push(1, nums))

// pop remove the top element from the stack and return the element
const pop = (arr) => {
  //subtract element at index 0?
  //hardcoded
  const index0 = arr[0]
  return arr.filter(e => e !== index0)
}
console.log(pop(nums))

// count the number of elements on the stack
const count = (arr) => {
  //for loop with counter that is returned
  //but uses length...
  //reduce?
  return arr.reduce((acc, e) => {
    acc += 1
    return acc
  }, 0)
}
console.log(count(nums))

// peek at the top element without removing it
const peek = (arr) => {
  const index = (count(arr) - 1)
  return arr[index]
  //find element at end
  //use count here to know what index is last (i -1 = last index)?
}
console.log(peek(nums))

// max find the largest value in the stack
const findLargest = (arr) => {
  //assume intergers
  //sort array and return the first value (aka largest)
  const sorted = arr.sort((a, b) => b - a)
  return sorted[0]
}
console.log(findLargest(nums))
// CANNOT USE: push / unshift (or shovel operator in Ruby), pop / shift, max / max_by / min / min_by, count / length, first / last
