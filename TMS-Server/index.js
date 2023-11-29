const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())

const start = async () => {

    try{
        await app.listen(port, () => {
            console.log(`Task manager system is running on port ${port}`)
        });
    }
    catch(err){
        console.log(err)
    }
};
start();