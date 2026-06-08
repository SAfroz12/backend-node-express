const express=require("express");
const app= express();
const studentRoutes=require("./routes/StudentsRoutes");
app.use(express.json());
app.use("/students",studentRoutes);

app.listen(1000)