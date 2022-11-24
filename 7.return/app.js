const calculateCircleArea = function (radius) {
    // return 3.14 * radius ** 2;
    return 3.14 * Math.pow(radius, 2);
}

let area = calculateCircleArea(10);
console.log(area)

// BIDMAS
let result = 2 + (20 - 4) / 2 ** 2;
console.log(result);

const calculateFourMainOperations = function (num1, num2) {
    let add = num1 + num2;
    let sub = num1 - num2;
    let mul = num1 * num2;
    let div = num1 / num2;
    return [add, sub, mul, div]
}

console.log(calculateFourMainOperations(6, 2))