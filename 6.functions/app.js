// reuseable block of code


// function declaration get hoisted on the top
// bad practice, cause you should declare the code before using it
sayHi()
function sayHi() {
    console.log('Hello world!');
}


// SOC(Separation of Concern), DRY(Don't Repeat Yourself), KISS(Keep It Simple and Stupid), SOLID --> OOD(Object Oriented Programming)

// expression is piece of code generate value
// function expression
const welcome = function () {
    console.log('Welcome to JS class')
}
welcome()

console.log('---')
// argument is the actual value that is apply when call the function
// parameter is the variables in a function definition

const logCourseDetails = function (courseTitle = 'html', trainerName = 'sussan') {
    console.log(trainerName + ' is the trainer for ' + courseTitle)
    console.log(`${trainerName} is the trainer for ${courseTitle}`)
}

// ' " `
logCourseDetails('php', 'hanna')
logCourseDetails()

let number = null;
console.log(number, number + 10, `The number is ${number}`)