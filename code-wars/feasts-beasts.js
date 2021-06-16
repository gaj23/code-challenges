// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
//
// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
//
// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

//first & last letters, look at splice & removing all in the middle
// splice -> string?
// use this as a helper function & apply to both beast & dish

//return true if these two things are strictly equal to one another

const feast = (beast, dish) => {
 //call helper function twice and store return as a variable
  const beastFirstLast = false;
  const dishFishLast = false;

  if (beastFirstLast === dishFishLast) {
    return true
  } else {
    return false
  }

}

const spliceFirstLast = input => {
  const inputs = input.split('')
  const first = inputs.shift()
  const last = inputs.pop()
  console.log(first)
  console.log(last)
  // make into an array
  // grab first and last only
  // join into a string
  // return the joined string
}

spliceFirstLast('boo')
