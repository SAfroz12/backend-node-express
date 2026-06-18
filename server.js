const express = require("express");
const mongoose = require("mongoose");
const studentRoutes=require("./routes/StudentsRoutes");
const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/studentstore").then(() => {
    console.log("mongodb connected")
}).catch((err) => {
    console.log(err)
});
app.use("/students",studentRoutes)

app.listen(3000, () => {
    console.log("server Running")
})