const button = document.querySelector('button');
console.log(button)

// return NodeList
// please use this cause can use foreach
const buttons = document.querySelectorAll('button');
console.log(buttons)

// return HTMLCollection
const buttonss = document.getElementsByTagName('button');
console.log(buttonss)

button.addEventListener('click', () => {
    console.log('You clicked me')
})


const items = document.querySelectorAll('li');
items.forEach(item => {
    item.addEventListener('click', e => {
        e.target.style.textDecoration = 'line-through'
    })
})