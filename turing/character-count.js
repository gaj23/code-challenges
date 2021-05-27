//input: string ->  need to make string an array that's iterated over (reduce!)

const countCharacters = (str) => {
  const characters = str.split('')
  //characters is my ARRAY that I want to apply reduce to.
  const unsortedCharacters = makeObject(characters)
  // console.log(unsortedCharacters)
  // now I need to sort the object
  // do I want to make it an array or is there something similar I could use logicwuse that sort also allows me to do?

  //I have an object. I want an array of single key value pairs. Where does that logic belong?

  //if the current keys value is less than the previous key, then move it's place
  // get values of the object, sort them, then match it and create an array of objects
  const values = Object.values(unsortedCharacters).sort((a, b) => b - a)
  // a sorted array of values only

  const keys = Object.keys(unsortedCharacters)
  // console.log({values})
  // console.log({keys})

  //now I want to look at the values array and say ok does the value match the object of unsortedCharacters[key]
  //need two forEaches because it's multi level

  //push the object {a: 1} into an ARRAY
  const sortedCharacters = []

  values.forEach(value => {
    // console.log(value)
    keys.forEach(key => {
      if(value === unsortedCharacters[key]) {
        //should represent the value in the original object
        sortedCharacters.push(([key][value]))
        //unsure of syntax
      }
    })
  })

  // console.log(sortedCharacters)
  //this is returning undefined

}

const makeObject = (characters) => {
  return characters.reduce((acc, e) => {
    if (!acc[e]) {
      //if our object doesn't already contain that element as a key, then add it as a key & increment by 1
      acc[e] = 1
    } else {
      acc[e] += 1
    }
    return acc
  }, {})
  //helper function
}

// countCharacters('bananas')

countCharacters('I like birds')

// Write a console application that outputs the results of the following analysis of an input text. First preference would be to read the text from a file (of your own specification).

// For each unique character that appears in the input string, report the number of occurrences of that character in the input. Report each character on its own line, in descending order based on the number of occurrences. Each line should be formatted as follows:

//UNIQUE, if repeated, add to the tally

//descending order of OCCURANCES (what has the highest num of occurances needs to be listed first) and so on and so for (concerned with the value of the object, not the key)

// <character>: <number of occurrences>
//return an array of an object with single key-value pair ---> return an objects key-values --> original

// There is no defined order for reporting characters that have the same number of occurrences. Such entries can appear in any order of your choosing in the output.
//
// Examples:
//
// analyze aaabbc
//
//   a: 3
//   b: 2
//   c: 1
// analyze "I really want to work for Wingspan"
//
//    : 6
//   o: 3
//   r: 3
//   a: 3
//   n: 3
//   w: 2
//   l: 2
//   t: 2
//   k: 1
//   W: 1
//   p: 1
//   g: 1
//   i: 1
//   I: 1
//   f: 1
//   y: 1
//   s: 1
//   e: 1
