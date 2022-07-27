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