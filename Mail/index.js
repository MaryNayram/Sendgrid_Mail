// Importing http library
const http = require("http");

const PORT = 3000; // Defining PORT

http.createServer((req, res) => {

    // Output Hello World on HTML page
    res.write("<h1>Hello World!</h1>");
    res.end();
})

// Initializing server
    .listen(PORT,() => console.log(`Server running on PORT : ${PORT}`));
