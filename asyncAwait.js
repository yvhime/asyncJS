const getTodo = async () => {
    const response = await fetch("todos/luigis.json");
    if (response.status !== 200) {
        throw new Error("cann fetch the data");
    }
    const data = await response.json();
    console.log(response);
    console.log(data);
    return data;
};

getTodo()
    .then(data => console.log("resolved", data))
    .catch(err => console.log("rejected", err.message));
// anything with async returns a promise