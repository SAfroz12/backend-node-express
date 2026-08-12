import { createClient } from "redis";
import express from "express";
import mongoose from "mongoose";
import Data from "./models/data.js"
mongoose.connect("mongodb://127.0.0.1:27017/redispractice");
console.log("mongooseconnected");
const app = express();
app.use(express.json())
const client = createClient();
client.on("error", (err) => {
    console.log(err)
})
await client.connect();
app.post("/users", async (req, res) => {
    const user = await Data.create(req.body);
    await client.del("users")
    res.json(user)
})

app.get("/users", async (req, res) => {
    const clientData = await client.get("users");
    if (clientData) {
        console.log("data is coming form redis")
        console.log(JSON.parse(clientData));


        return res.json({
            data:JSON.parse(clientData)
        })
    }
    console.log("data is coming from mongodb");
    const user=await Data.find();
    await client.set("users",JSON.stringify(user),{EX:80})
    res.json(user)
 })
 app.put("/update-user/:id",async(req,res)=>{
    const  update=await Data.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}

    );
    if(!update){
        return res.json({
            message:"user not found"
        })
    }
    await client.del("users");
    res.json(update)
 })
 app.delete("delete-user",async(req,res)=>{
    const deleteuser=await Data.findByIdAndDelete(req.params.id);
    if(!deleteuser){
        return res.json({
            message:"Enter valid ID "
        })
    }
    await client.del("users")
    res.json({
        message:"deleted user"
    })
 })
app.listen(3000, () => {
    console.log("server is running")
})  
