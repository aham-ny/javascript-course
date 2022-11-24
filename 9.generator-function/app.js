function* simpleGenerator() {
    console.log('before 1')
    yield 1;
    console.log('after 1')
    console.log('before 2')
    yield 2;
    console.log('after 2')
    console.log('before 3')
    yield 3;
    console.log('after 3')
}

const generatorObject = simpleGenerator();
console.log(generatorObject)
console.log(generatorObject.next())
console.log(generatorObject.next())
console.log(generatorObject.next())
console.log(generatorObject.next())

// babel is a compiler to transpile the next gen code JavaScript code to backwards-compatible code