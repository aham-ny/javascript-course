fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json()).then(data => console.log(data))

let promise = new Promise((resolve, reject) => {
    const firstName = 'john';
    const lastName = 'doe';

    if (firstName === ' john') {
        resolve()
    } else {
        reject()
    }
})

promise.then(() => {
    console.log('Hello World')
})