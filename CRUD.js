const express=require("express");
const app=express();
app.use(express.json());
let students=[
    {id:1,name:"java",desc:"j1"}
    ,{id:2,name:"javaScript",desc:"j2"}
]
app.get("/students",(req,res)=>{
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
app.put('/students/:id',(req,res)=>{
    const StudentId=Number(req.params.id);
    const {name,des}=req.body;
    const findOne=students.find((s)=>s.id===StudentId);
    if(!findOne){
         return res.send("user is not there")
    }
    findOne.name=name;
    findOne.desc=desc;
    res.send("changed Successfully")
})

app.patch("students/:id",(req,res)=>{
    const StudentIdOne=Number(req.params.id);
    const findOne=students.filter((s)=>s.id===StudentIdOne);
    if(!findOne){
         return res.send("no id was there");
    }
    if(req.body.name){
        findOne.name=req.body.name
    }
    if(req.body.desc){
        findOne.desc=req.body.desc
    }
    res.send("changed successfully");
})
app.delete("/students/:id",(req,res)=>{
    const studentid=Number(req.params.id);
    const filteredOne=students.filter((s)=>s.id!==studentid);
    res.send("deleted successfully");
})
app.listen(1001, () => {

   console.log("Server running");

});