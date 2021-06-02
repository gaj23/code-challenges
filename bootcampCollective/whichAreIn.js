// Which Are In?
// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.
//
// For example, given
//
// a1 = ["arp", "live", "strong"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// Your function should return
//
// ["arp", "live", "strong"]
// Given
//
// a1 = ["tarp", "mice", "bull", "arms"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// Your function should return ["arms"].

//I want to compare a1 to a2 and if a1 exists in a2, then I want to retrun those elements in r

// includes
// whole.includes(part)

//test above

// const whole = 'barnacles'
// const part = 'barn'
//
// const findPart = () => {
//   if (whole.includes(part)) {
//     return 'Yes'
//   } else {
//     return 'No'
//   }
// }
// findPart()
// returned 'Yes'

const returnOrderedParts = (a1, a2) => {

  const r = []

  a1.forEach(part => {
    a2.forEach(whole => {
      const findPart = (whole, part) => {
        if (whole.includes(part)) {
          r.push(whole)
          // need to push to the array that will eventually be returned
        }
      }

      findPart(whole, part)
    })
  })


  // return r
  return r.sort()
  //check sort for alphabet order
  //what if I have apple and art? both are as, but the order needs to further be considered

}
