const getTodo = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json()).then(data => console.log(data))
    const data = await res.json();
    console.log(data)
}

getTodo()