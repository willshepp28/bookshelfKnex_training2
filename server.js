const express = require('express'),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 3000,
    app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.listen(port, () => {
    console.log("Server started on port: ", port);
});