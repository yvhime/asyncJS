// console.log(1);
// console.log(2);
// setTimeout(function() {
//     console.log("callback function fired");
// }, 5000); // this is an asynchronous code
// setTimeout(() => {
//     console.log("callback func fired");
// }, 3000); // this is an asynchronous code
// console.log(3);
// console.log(4);

const getTodos = (callback) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
        if(request.readyState === 4 && request.status === 200) { // 4 is complete or done
            // console.log(request.responseText);
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        } else if(request.readyState === 4) {
            // console.log("could not fetch the data");
            callback("could not fetch data", undefined);
        }
    });
    // request.open("GET", "https://jsonplaceholder.typicode.com/todos/"); 
    // has diff properties and methods // .open() has 2 arguments
    // first argument is the method we want to make
    // source from https://jsonplaceholder.typicode.com/
    request.open("GET", "todos.json"); 
    request.send();
}; // callback argument is from getTodos() a
//  

getTodos((err, data) => {
    console.log("callback fired");
    console.log(err, data);
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
}); // function(err, data) is the parameter to be passed to getTodos