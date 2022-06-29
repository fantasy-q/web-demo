/*
 * 6) Given an array of potential voters, return an object representing the results of the vote
 * Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55,
 * and how many of each of those age ranges actually voted.
 * The resulting object containing this data should have 6 properties.See the example output at the bottom.
*/
var voters = [
  { name: 'Bob', age: 30, voted: true },
  { name: 'Jake', age: 32, voted: true },
  { name: 'Kate', age: 25, voted: false },
  { name: 'Sam', age: 20, voted: false },
  { name: 'Phil', age: 21, voted: true },
  { name: 'Ed', age: 55, voted: true },
  { name: 'Tami', age: 54, voted: true },
  { name: 'Mary', age: 31, voted: false },
  { name: 'Becky', age: 43, voted: false },
  { name: 'Joey', age: 41, voted: true },
  { name: 'Jeff', age: 30, voted: true },
  { name: 'Zack', age: 19, voted: false }
];

function voterResults(arr) {
  return arr.reduce((p, c) => {
    const { age, voted } = c
    const ageBetween = (a, b) => a <= age && age <= b
    if (ageBetween(18, 25)) {
      voted ? p.numYoungVotes++ : null
      p.numYoungPeople++
    } else if (ageBetween(26, 35)) {
      voted ? p.numMidVotesPeople++ : null
      p.numMidsPeople++
    } else if (ageBetween(36, 55)) {
      voted ? p.numOldVotesPeople++ : null
      p.numOldsPeople++
    }
    return p
  },
    {
      numYoungVotes: 0,
      numYoungPeople: 0,
      numMidVotesPeople: 0,
      numMidsPeople: 0,
      numOldVotesPeople: 0,
      numOldsPeople: 0,
    }
  )
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4 
}
*/







