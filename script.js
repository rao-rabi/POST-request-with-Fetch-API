let createTodo = async (todo) => {
    let options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(todo)
    }
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    let response = await p.json()
    return response
}

let getTodo = async (id) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    let todo = await response.json();
    return todo;
}

let mainFunction = async () => {
    let todo = {
        title: 'Rabi',
        body: 'Roll NO.18',
        userId: '2021-GCUF-05050',
    };
    let todoResponse = await createTodo(todo)
    console.log(todoResponse);
    console.log(await getTodo(21));
}

mainFunction()

//cookies

let key = prompt("Enter Your Key")
let value = prompt("Enter Your Value")

console.log(document.cookie);
document.cookie = "raorabi = 234"
document.cookie = `${encodeURIComponent(key)} = ${encodeURIComponent(value)}`
console.log(document.cookie);

