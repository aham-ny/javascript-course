let number = 15;
// 3: FIZZ, 5: BUZZ, Botth FIZZBUZZ, NO FIZZ NO BUZZ
if (number % 3 === 0 && number % 5 === 0) {
    console.log('FIZZ BUZZ')
} else if (number % 5 === 0) {
    console.log('BUZZ')
} else if (number % 3 === 0) {
    console.log('FIZZ')
} else {
    console.log('NO FIZZ NO BUZZ')
}

// above 5000 considered as high income below it consider is low income
let income = 5000;
let isHeighIncome = income > 5000
console.log(isHeighIncome)

// above 3000 is business else economy
let ticketPrice = 3000;
// ternary operator
let ticketClass = ticketPrice > 3000 ? 'business' : 'economy'
console.log(ticketClass)