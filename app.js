const express = require("express");
const app = express();
const path = require('path');
const port = 8000;

app.use('/static', express.static('static'));

app.set('view engine', 'pug');    // Set the template engine as pug
app.set('views', path.join(__dirname, 'views'));    // Set the views directory


app.get('/', (req, res) => {
    res.status(200).render('index.pug');
 });

app.listen(port, ()=> {
    console.log(`The application started successfully on port ${port}`);
});