import express from "express";
const app=express();
import { createClient } from "redis";
const client=createClient();
client.on("error",(err)=>{
    console.log("error",err)
})
await client.connect();
app.use(express.json());
app.post("/send-otp", async (req, res) => {
    const { email } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000)
    await client.set(`otp:${email}`, String(otp), { EX: 800 })
    const getval=await client.get(`otp:${email}`);
    console.log(getval)
    console.log("otp", otp)
    res.json({
        message: "OTP generated"
    })
})
app.post("/verify-otp", async(req, res) => {
    const { email, otp } = req.body;
    const storedOtp = await client.get(`otp:${email}`);
    if (!storedOtp) {
        return res.status(400).json({
            message: "otp expired"
        })
    }
    if (storedOtp !== otp) {
        return res.status(400).json({
            message: "otp is in correct"
        })
    };
    await client.del(`otp:${email}`)
    res.json({
        message: "otp verified"
    })
})
app.listen(3000, () => {
    console.log("server is running")
})  