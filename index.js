const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json( "Hello From Heroku");
});


app.listen(process.env.PORT || 5000, (req, res) => {
        console.log("Server is running at port 5000")
        })
