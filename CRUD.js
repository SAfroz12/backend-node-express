const express=require("express");
const app=express();
app.use(express.json());
let students=[
    {id:1,name:"java",desc:"j1"}
    ,{id:2,name:"javaScript",desc:"j2"}
]
app.get("/student",(req,res)=>{
    res.send(students)
})
app.post("/students",(req,res)=>{
    const {id,name,desc}=req.body;
    const newStudent={
        id,name,desc
    };
    students.push(newStudent);
    res.send("student added")
})
app.put("/students/:id",(req,res)=>{
    const studentID=Number(req.params.id);
    const {name,desc}=req.body;
    const findOne=students.find((s)=>s.id===studentID);
    if(!findOne){
     return     res.send("id is not there")
    }
findOne.name=name;
findOne.desc=desc;

res.send("student updated")
})

app.delete("/students/:id",(req,res)=>{
    const studentId=Number(req.params.id);
    students=students.filter((s)=>s.id!==studentId);
    res.send("student deleted")
})
app.listen(1001, () => {

   console.log("Server running");

});