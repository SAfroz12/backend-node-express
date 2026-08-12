import {createClient }from "redis"

// async function run() {
//     const client = createClient();

//     console.log(client);

//     await client.connect();

//  const setname=await client.set("name","appu");

//  const getVal=await client.get("name");

//  const del=await client.del("name");

//  const exist=await client.exists("name")
//  await client.set("otp","9000");
//  console.log(await client.get("otp"));
//  const result=await client.expire("otp",1000);
//  console.log(result)
// setTimeout(async () => {
//      console.log(await client.ttl("otp"))
// },4000)

//  const res=client.quit()
// console.log(res)
// }

// run();
async function redis() {
     
const client=createClient();
await client.connect();
let setname=await client.set("name","appu");
console.log(setname);
let expired=await client.expire("name",10);
console.log(expired);
 setTimeout(async () => {
     console.log(await client.ttl("name"))

     console.log(await client.get("name"))
},4000)

console.log(await client.PERSIST("name"))
}
redis()