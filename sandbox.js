console.log(1);
console.log(2);
setTimeout(function() {
    console.log("callback function fired");
}, 5000); // this is an asynchronous code
setTimeout(() => {
    console.log("callback func fired");
}, 3000); // this is an asynchronous code
console.log(3);
console.log(4);
