// Closest Cartesian Points
// Given a set of points [x, y] on a 2D cartesian plane, find the two closest points. For example, given the points:
//
// [[1, 1], [-1, -1], [3, 4], [6, 1], [-1, -6], [-4, -3]]
// return
//
// [[1, 1], [-1, -1]]


// input: array of arrays with two data points (negative or positive)

// output: an array with two elements (arrays) that represent TWO intergers that were originally given.

// I will need to know where they are in the plane - how? my original assumption of subtraction?

// I will start at the 0 index and go through the whole array, not the most optimal soln, but it is a place to start for now.

// if I'm given an array with only one element, how will my function respond?

// if I'm given an array with only two elements, how will my function respond?

// questions: Should I expect only intergers? What is a 2D cartesian plane? How will I know how "close" the two points are?

// answers: I'll assume only intergers; aka coordinate system; need to compare the x & y of each.
// can assume that 0 index is x value and 1 index is y values!

// is there away for me to iterate through each element in array A, subtract the difference between the elements in array b and compare them with the previous "least" point?

// first iteration of looking through the array
// [1, 1](A), [-1, -1](B)
// need to subtract the x values and y values of A & B
// add that value together
// squareroot that value to find distance


const findDistance = (A, B) => {
  return Math.hypot(A, B)
}


const findTwoClosestPoints = arr => {
  arr.forEach(closestPoints => {

  })
}
