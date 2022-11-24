let people = ['john', 'steve', 'kate', 'hanna', 'sussan'];
people.forEach(person => console.log(person))

const logNames = (person, index) => console.log(person, index)
people.forEach(logNames)