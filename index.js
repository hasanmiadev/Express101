console.clear()
const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.json({
        message:"WORKING PERFECTEDLY"
    })
})

app.listen(4000, ()=>{
    console.log("Server listening on Port 4000");
})