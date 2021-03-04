const express = require('express');

const app = express();


app.use('/users',(req, res, next) => {
    console.log("Second Middleware");
    res.send("<p>The Middleware that handles just/users</p>")
    //res.write('<html>');
    //res.write('<body><ul><li>User 1</li><li>User 2</li> <li>User 3</li></ul></body>');
    //res.write('</html>');
});


app.use('/',(req, res, next) => {
    console.log("First Middleware");
    res.send("<p>The Middleware that handles just/</p>")
    //res.send('<html>');
    //res.send('<body><h1>Welcome User</h1><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Submit</button></form></body>');
    //res.send('</html>');
});



app.listen(3000);



