const people = [
    { name: 'jack', favColor: 'orange' },
    { name: 'sussan', favColor: 'blue' },
    { name: 'bard', favColor: 'orange' },
    { name: 'hanna', favColor: 'green' },
]

// filter and map they are not destructive
const fansOfOrange = people.filter(person => person.favColor === 'orange')
console.log(fansOfOrange)

const names = people.map(person => person.name)
console.log(names)