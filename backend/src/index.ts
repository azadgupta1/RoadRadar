import express from "express"
const PORT = 5000

const app = express();


app.get('/', (req,res) =>{
    res.send("Hello its working...");
});


app.listen(PORT, () => {
    console.log("Server is running on port "+PORT+".");
});