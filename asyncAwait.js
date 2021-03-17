const getTodo = async () => {
    const response = await fetch("todos/luigi.json");
    const data = await response.json();
    console.log(response);
    console.log(data);
    return data;
};

getTodo()
    .then(data => console.log("resolved", data));

// anything with async returns a promise