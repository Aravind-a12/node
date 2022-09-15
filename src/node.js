const express = require('express');
const app = express();
app.get('/hello', function(req, res) {
    res.send("hello world");
    });

    
    app.listen(process.env.PORT || 3000, (req, res) => {
        console.log("Server is running at port 3000")
        })
