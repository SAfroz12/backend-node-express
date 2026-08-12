// import { createElement } from "react";
import { createClient } from "redis";
const client=createClient();
client.on("error",(err)=>{
    console.log("error",err)
})
await client.connect();
export default client
