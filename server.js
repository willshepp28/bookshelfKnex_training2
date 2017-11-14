const express = require('express'),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 3000,
    knex = require('./db/knex'),
    app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.get('/todos', (req, res) => {
//     // select all from todos
//     knex.raw('select * from todos')
//         .then(todos => {
//             res.send(todos.rows);
//         });

// });

app.get('/todos', (req, res) => {
    knex
        .select()
        .from('todos')
        .then(todos => {
            res.send(todos);
        });
});


app.listen(port, () => {
    console.log("Server started on port: ", port);
});