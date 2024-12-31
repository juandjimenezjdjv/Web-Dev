const fs = require('fs');

fs.writeFile("Message.txt", "Usando node.js para correr el code.", (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("File has been created");
});

fs.readFile("Message.txt", "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("Prueba");
    console.log(data);
});