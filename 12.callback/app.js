const myFunc = (callback, x) => {
    // let value = 10;
    callback(x);
}

// myFunc(value => console.log(value))


const printValue = value => console.log(value)
myFunc(printValue, 25)