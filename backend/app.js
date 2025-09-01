import dotenv from "dotenv";
dotenv.config()

import express from "express";
import DatabaseConnection from "./db/db.js";
import userRoute from "./Routes/userRoute.js";


const app = express();
let PORT = process.env.PORT || 5000

app.use(express.json());
//middleware

app.use("/pwm/api/user", userRoute)

//database connection
DatabaseConnection().then(() => {
    //server
    app.listen(PORT, () => {
        console.log(`server is started on PORT: ${PORT}`);
    })
})

