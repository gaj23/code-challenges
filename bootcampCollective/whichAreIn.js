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

  if (!a1 || !a2 ) {
    return 'Please enter valid strings'
  }

  const r = []

  // a1.forEach(part => {
  //   a2.forEach(whole => {
  //     const findPart = (whole, part) => {
  //       if (whole.includes(part) && !r.includes(part)) {
  //         r.push(part)
  //         // need to push to the array that will eventually be returned
  //         //want array of used parts only ONCE
  //       }
  //     }
  //
  //     findPart(whole, part)
  //   })
  // })

  a1.forEach(part => {
    a2.find(whole => {
      if(whole.includes(part) && !r.includes(part)) {
        r.push(part)
      }
    })
 })

  return r === [] ? r.sort() : 'No matches found'
  //check sort for alphabet order
  // do I need to worry about having parts that have the first same letter and then need to be further compared?

}

//edge cases:
//if undefined value?
// if null value?
// if none of that parts match the whole -> what gets returned then?
//what if one of the things has an exclaimation point? How does it get sorted then?
