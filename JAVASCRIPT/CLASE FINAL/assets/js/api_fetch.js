
let url = "https://jsonplaceholder.typicode.com/todos";
let request = new Request(url);
request.method = "GET"; // method - GET, POST, PUT, DELETE, HEAD

fetch(request).then( response => {
    return response.json();
}).then(console.log).catch(console.log);

