const people = ['steve', 'john', 'sussan', 'hanna'];

const formatPeople = () => {
    let val = '';
    people.forEach(person => val += person + ', ')
}

const greet = () => {
    console.log(people[0] + ' says hi')
}

export {  greet }
export default people