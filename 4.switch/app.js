let carBrand = 'benz';

switch (carBrand) {
    case 'toyota':
        console.log('Made in Japan')
        break;
    case 'volvo':
        console.log('Made in Sweden')
        break;
    case 'proton':
        console.log('Made in Malaysia')
        break;
    case 'kia':
        console.log('Made in Korea')
        break;
    case 'cherry':
        console.log('Made in China')
        break;
    case 'bmw':
    case 'benz':
    case 'audi':
        console.log('Made in Germany')
        break;
    default:
        console.log('unknown brand')
}