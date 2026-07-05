const fs=require("fs");
 fs.writeFile("message.txt","helloav",(err)=>{
    console.log("written")
 })
fs.readFile("message.txt","utf8",(err,data)=>{
    console.log(data)
})
fs.appendFile("message.txt","\nworld",()=>{})

fs.unlink("message.txt",()=>{

})
fs.mkdir("1",()=>{})