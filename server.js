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


// get all todos
app.get('/todos', (req, res) => {
    knex
        .select()
        .from('todos')
        .then(todos => {
            res.send(todos);
        });
});

// get one todo
app.get('/todo/:id', (req, res) => {
    knex
        .select()
        .from('todos')
        .where('id', req.params.id)
        .first()
        .then(todos => {
            res.send(todos);
        });
});


// create a todo
app.post('/todos', (req, res) => {
    knex('todos')
        .insert({
            title: req.body.title,
            user_id: req.body.user_id
        })
        .then(() => {
            knex
                .select()
                .from('todos')
                .then(todos => {
                    res.send(todos);
                });
        });
});


// update todo
app.put('/todos/:id', (req, res) => {
   knex('todos')
    .where('id', req.params.id)
    .update({
        title: req.body.title,
        completed: req.body.completed
    })
    .then(() => {
        knex
            .select()
            .from('todos')
            .then(todos => {
                res.send(todos);
            });
    });
});



// start server
app.listen(port, () => {
    console.log("Server started on port: ", port);
});