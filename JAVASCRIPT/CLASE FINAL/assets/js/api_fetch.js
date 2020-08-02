
let url = "https://jsonplaceholder.typicode.com/todos";
let request = new Request(url);
request.method = "GET"; // method - GET, POST, PUT, DELETE, HEAD

fetch(request).then( response => {
    // loader
    return response.json();
}).then(data => {
    // filtrando datos
    return data.filter( i => i.userId === 10);
}).then(console.log)
    .catch(console.log);

