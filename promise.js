// resolve = success = then
// reject = error = catch

let p = new Promise((resolve, reject) => {
    let sampleNumber = 1 + 1;
    if (sampleNumber == 2) {
        resolve('right answer');
    } else {
        reject('wrong answer');
    }
});

p.then((porkchop) => {
    console.log(porkchop);
})
.catch((porkchop) => {
    console.log(porkchop);
})

fetch('todos/luigi.json').then((response) => {
    console.log('resolved json gagi', response);
    return response.json();
}).then((jsonData) => {
    console.log(jsonData);
})
.catch((reject) => {
    console.log('rejected jason', reject);
});