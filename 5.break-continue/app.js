let scores = [43, 22, 51, 0, 87, 100, 66, 19, 30]
let length = scores.length;

for (let i = 0; i < length; i++) {
    if (scores[i] == 0)
        continue;
    console.log(scores[i])
    if (scores[i] == 100) {
        console.log('Congrats, you got the highest score');
        break;
    }
}

// strongly typed language vs weakly typed language 
// String name = 'hanna'
// var name = 'daniel'

// strict comparison vs loose comparison
let number = 5;
console.log(number == '5')
console.log(number === '5')
console.log('apple' < 'orange')
console.log('apple'.codePointAt())
console.log('orange'.codePointAt())