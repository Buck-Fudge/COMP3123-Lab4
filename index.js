// Week 4 Lab Exercise
// Philip Cheginy
// 101439635
const express = require('express');
const app = express();
const SERVER_PORT = process.env.port || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// http://localhost:3000/hello
app.get('/hello', (req, res) => {
    res.status(200);
    res.type('html');
    res.send('Hello, Express JS!');
});

// Query Param
// http://localhost:3000/user?fname=Philip&lname=Cheginy
// http://localhost:3000/user
app.get('/user', (req, res) => {

    console.log(req.query);

    if (req.query.fname === undefined || req.query.lname === undefined) {
        var [fname, lname] = ["Pritesh", "Patel"];
    } else {
        var {fname, lname} = req.query;
    }
    
    res.status(200);
    res.type('html');

    res.send(`<h1>User</h1>
    <p>First Name: ${fname}</p>
    <p>Last Name: ${lname}</p>`)
})

// POST Request
// http:localhost:3000/user
// but this time with post method.
app.post('/user/:fname/:lname', (req, res) => {

    const {fname, lname} = req.params;
    //console.log(req.query);
    console.log(`User invoked user method via POST: ${fname} ${lname}`);
    
    res.status(200);
    res.type('html');

    res.send(`<h1>User</h1>
        <p>First Name: ${fname}</p>
        <p>Last Name: ${lname}</p>`)
})



app.listen(SERVER_PORT, () => {
    console.log("Server is running on port http://localhost:3000")
});