let students = [
  {
    name: 'Hermione',
    gender: 'female',
    house: 'Gryffindor',
    pointsForHouse: 50,
    personality: ['logical', 'kind', 'just', 'book worm']
  },
  {
    name: 'Harry',
    gender: 'male',
    house: 'Gryffindor',
    pointsForHouse: 35,
    personality: ['brave', 'loyal', 'selfless', 'courage']
  },
  {
    name: 'Ron',
    gender: 'male',
    house: 'Gryffindor',
    pointsForHouse: -5,
    personality: ['stubborn', 'strategist', 'loyal', 'passionate']
  },
  {
    name: 'Luna',
    gender: 'female',
    house: 'Ravenclaw',
    pointsForHouse: 15,
    personality: ['whimsical', 'quiet', 'dependable']
  },
  {
    name: 'Cedric',
    gender: 'male',
    house: 'Hufflepuff',
    pointsForHouse: 20,
    personality: ['brave', 'just', 'modest']
  },
  {
    name: 'Draco',
    gender: 'male',
    house: 'Slytherin',
    pointsForHouse: 30,
    personality: ['cunning', 'arrogant', 'jealous']
  },
  {
    name: 'Pansy',
    gender: 'female',
    house: 'Slytherin',
    pointsForHouse: 10,
    personality: ['leader', 'selfish', 'team-player']
  },
  {
    name: 'Cho',
    gender: 'female',
    house: 'Ravenclaw',
    pointsForHouse: 20,
    personality: ['brave', 'loyal', 'intelligent', 'extrovert']
  }
]

let houseHeads = {
  McGonagall: 'Gryffindor',
  Snape: 'Slytherin',
  Sprout: 'Hufflepuff',
  Flitwick: 'Ravenclaw'
}

//Problems 1-3 use everything above, problems 4-5 use the hogwarts object

let hogwarts = {
  classes: [
    { name: 'Transfiguration', instructor: 'McGonagall', type: 'core' },
    { name: 'Charms', instructor: 'Flitwick', type: 'core' },
    { name: 'Potions', instructor: 'Snape', type: 'core' },
    { name: 'History of Magic', instructor: 'P. Binns', type: 'core' },
    { name: 'Defence Against the Dark Arts', instructor: 'N/A', type: 'core' },
    { name: 'Astronomy', instructor: 'P. Sinistra', type: 'core' },
    { name: 'Herbology', instructor: 'Sprout', type: 'core' },
    { name: 'Arithmancy', instructor: 'P. Vector', type: 'elective' },
    { name: 'Muggle Studies', instructor: 'P. Burbage', type: 'elective' },
    { name: 'Divination', instructor: 'P. Trelawney', type: 'elective' },
    { name: 'Study of Ancient Runes', instructor: 'P. Babbling', type: 'elective' },
    { name: 'Care of Magical Creatures', instructor: 'Hagrid', type: 'elective' }
  ],
  rooms: ['Great Hall', 'Kitchens', 'Ravenclaw House', 'Slytherin House', 'Gryffindor House', 'Hufflepuff House', 'Instructor quarters', 'Headmasters Office', 'Hospital Wing', 'Chamber of Secrets', 'Greenhouses', 'Astronomy Tower'],
  populations: {
    students: 280,
    professors: 15,
    ghosts: 22,
    'house elves': 100,
  },
  founders: ['Godrick Gryffindor', 'Helga Hufflepuff', 'Rowena  Ravenclaw', 'Salazar Slytherin'],
  currentHeadmaster: {
    name: 'Albus Percival Wulfric Brian Dumbledore',
    age: 115,
    alive: true,
    wand: '15 inch Elder Thestral tail hair core',
    gender: 'male',
    'eye color': 'Blue',
    family: [
      { father: 'Percival', alive: false },
      { mother: 'Kendra', alive: false },
      { sister: 'Ariana', alive: false },
      { brother: 'Aberforth', alive: true }
    ]
  }
}



//Problem 1.1
// Create a function where you can put the name of a house head
// and get back the student objects that in that house
const findHouseHeadPlusStudents = (head) => {
  return students.filter(student => student.house === houseHeads[head])
}

// findHouseHeadPlusStudents('Flitwick')


//Problem 1.2
//Can you make the array send back only the names of the students?
const findStudentNamesOfHouse = (head) => {
  const names = students.reduce((acc, student) => {
    if (student.house === houseHeads[head]) {
      acc.push(student.name)
    }
    return acc
  }, [])

  return names
}

// findStudentNamesOfHouse('Snape')


// Problem 2.1
//How many house points have been added to the house cups overall?
const addAllHousePoints = () => {
  return students.reduce((acc, student) => {
    acc += student.pointsForHouse
    return acc
  }, 0)
}

// addAllHousePoints()


//Problem 2.2
//How many house points have the Ravenclaw folks added to their cup?

const addHousePoints = house => {
  return students.reduce((acc, student) => {
    if (student.house === house) {
      acc += student.pointsForHouse
    }
    return acc
  }, 0)
}

addHousePoints('Ravenclaw')


// Problem 3.1
//For all students excpet the Slytherins, add a property called 'currentlyAttending' with a value of true. For Slytherins, add make it false



//Problem 3.2
//Console log the class that each house head is teaching



// Problem 3.3
//Check to see if any students are missing from class


// Problem 5.1
//Dumbledore just defeated Grindelwald and obtained the elder wand! Create an array of all his wands



//Problem 5.2
//Which one of Dumbledore's family members are alive? RETURN JUST THE NAME, not an array of object



//Problem 5.3
//Which of them are dead? RETURN JUST THE NAMES, not an array of objects























//////////// SOLUTIONS ///////////////


//1.1

// const filterHouseHead = (houseHead) => {
//  let filtered= students.filter((currentStudent) => {
//     return currentStudent.house === houseHeads[houseHead];
// })

// return filtered.map((currentStudent) => {
//   return currentStudent.name;
// })

// }


// filterHouseHead('McGonagall');


// 1.2

// const filterHouseHead = (houseHead) => {
//  let filtered= students.filter((currentStudent) => {
//     return currentStudent.house === houseHeads[houseHead];
// })

// return filtered.map((currentStudent) => {
//   return currentStudent.name;
// })

// }

// filterHouseHead('McGonagall');


//2.1

// const housePoints = students.reduce((sum, currentStudent) => {

//   sum+= currentStudent.pointsForHouse;
// return sum
// }, 0)

// // housePoints;

//2.2

// const ravenclawPoints = students.reduce((sum, currentStudent) => {
//   if (currentStudent.house === 'Ravenclaw') {
//     sum+= currentStudent.pointsForHouse;
//   }

// return sum
// }, 0)

// // ravenclawPoints;


//3.1

// const newProp = students.map((currentStudent) => {

//   currentStudent.currentlyAttending = currentStudent.house !== 'Slytherin'
//   return currentStudent;

// })

// newProp;


// OR
// const newProp = students.map((currentStudent) => {
//   if (currentStudent.house === 'Slytherin') {
//      currentStudent.currentlyAttending = false
//   } else {
//     currentStudent.currentlyAttending = true;
//   }
//   return currentStudent;
// })


//3.2

// const houseHeadKeys = Object.keys(houseHeads)
// console.log(houseHeadKeys);
// hogwarts.classes.forEach((currentClass) => {
//   if (houseHeadKeys.includes(currentClass.instructor)) {
//     console.log(currentClass);
//   }
// })


// 3.3

// const notAttending = newProp.filter((currentStudent) => {
//   return currentStudent.currentlyAttending === false;

// })

// notAttending;


// 5.1

//incomplete, sorry



// 5.2

// const livingMember = hogwarts.currentHeadmaster.family.find((currentMember) => {
//   return currentMember.alive
// })


// Object.values(livingMember)[0]


//5.3

// const deadMembers = hogwarts.currentHeadmaster.family.filter((currentMember) => {
//   return currentMember.alive === false;
// }).map((currentMember) => {
//   return Object.values(currentMember)[0]

// })



// deadMembers;
