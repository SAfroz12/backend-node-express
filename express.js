const express=require("express");
const app=express();
const product={
    name:"laptop",
    price:40000
}
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
app.get("/user",(req,res)=>{
    res.send(users)
})


app.listen(3009)

