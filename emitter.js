const Eventemitter=require("events");
const emitter=new Eventemitter();
console.log(emitter);
emitter.on("greet",()=>{
    console.log("hello")
})
emitter.emit("greet")
// emitter.emit("greet")

//passing data
emitter.on("listen",(user)=>{
    console.log(user)
})
emitter.emit("listen","js")

//once();
emitter.once("OnlyOnce",()=>{
    console.log("java");

})
emitter.emit("OnlyOnce")
emitter.emit("OnlyOnce");
//off();
function greet(){
 console.log("welcome");
}
emitter.on("login",greet)
// emitter.emit("login");
emitter.off("login",greet);
emitter.emit("login");
console.log(emitter.listenerCount("listen"));
console.log(emitter.eventNames("listen"));
