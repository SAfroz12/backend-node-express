const express=require("express");
const routes=express.Router();;

// routes.get("/",(req,res)=>{
//     res.send("all products")
// })
// routes.get("/:id",(req,res)=>{
//     res.send(`iam the id ${req.params.id}`)
// });
routes.route("/").
get((req,res)=>{
    res.send("iam get method of route")
}).
post((req,res)=>{
res.send("iam put method of route")
})

module.exports=routes;

// without express



const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url === "/" && req.method === "GET") {
        res.write("Home Page");
        res.end();
    }

    else if (req.url === "/about" && req.method === "GET") {
        res.write("About Page");
        res.end();
    }

    else {
        res.statusCode = 404;
        res.end("Not Found");
    }

});

server.listen(3000);
// manual parsing 
const http = require("http");

const server = http.createServer((req, res) => {

    let body = "";

    req.on("data", (chunk) => {
        body += chunk;
    });

    req.on("end", () => {

        const data = JSON.parse(body);

        console.log(data.email);
        console.log(data.password);

        res.end("Success");

    });

});

server.listen(3000);
