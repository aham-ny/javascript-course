function add(...input) {
    let sum = 0;
    for (let i of input) {
        sum += i;
    }
    return sum;
}

console.log(add(1, 2));
console.log(add(1, 2, 3))

function logNames(a, b, ...c) {
    console.log(`${a} ${b}`);
    console.log(c)
    console.log(c.length)
}

logNames('sussan', 'micheal', 'kate', 'brad', 'hanna')