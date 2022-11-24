for (let i = 0; i < 5; i++) {
    console.log(i)
}

let peopleList = []
let peopleRecords = []
let people = ['jack', 'hanna', 'sussan']
// php count(people)
// length()
let peopleLength = people.length
for (let i = 0; i < people; i++) {
    console.log(people[i])
}

for (let i in people) {
    console.log(people[i])
}

for (let person of people) {
    console.log(person)
}