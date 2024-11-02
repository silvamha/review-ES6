export const player = {
    name: 'Lebron James',
    club: 'LA Lakers',
    address: {
      city: 'Los Angeles'
    }
  };
  
export  const {name, club, address:{city}} = player

let names = ['Dylan', 'Coding God', 'Israel'];

const students = [ 
    { name: "John", city: "New York" },
    { name: "Peter", city: "Paris"},
    { name: "Kate", city: "Sidney" }
]

for (let student of students){
console.log(`${student.name} lives in ${student.city}`)
}

let contacts = ["Mary", "Joel", "Danny", "Mark", "Jeana", "James"];
let newArray = ['New Info',...contacts]

console.log(newArray)
