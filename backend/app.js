import express from "express"

const app = express();
const PORT = 8000



//server
app.listen(PORT, () => {
    console.log("server is started")
})