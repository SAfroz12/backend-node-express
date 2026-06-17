const express=require("express");
const app=express();
const product={
    name:"laptop",
    price:40000
}
// 1)req.body concept//
// example 1)
app.use(express.json());

app.post("/student",(req,res)=>{
    console.log(req.body);
    const {name,age}=req.body;
    res.send(`student is ${name} and age is ${age}`)
})
// app.listen(9000,()=>{
//     console.log("server running on port 9000")
// })
// end of example//
app.get("/",(req,res)=>{
    res.send("home")
})
app.get("/sum/",(req,res)=>{
    const {a,b}=req.query;
    const num1=Number(a);
    const num2=Number(b)
    res.send(`sum is ${num1+num2}`)
})
app.use((req,res)=>{
    
    res.status(404).send("Page Not Found")
})
app.get("/product",(req,res)=>{

    res.json(product)

})
app.get("/get",(req,res)=>{
res.send("iam get method")
})
app.put("/post",(req,res)=>{
res.send("iam post method")
})
app.delete("/delete",(req,res)=>{
res.send("iam delete method")
})

const users=["ali","appi","appu"];
app.get("/used",(req,res)=>{
    res.send(users)
})


// app.listen(3009)


