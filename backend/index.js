const express = require("express")
const app = express()
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;
const cors = require("cors");

require('dotenv').config()  

app.use(express.json());
app.use(cors({
    origin : ["http://localhost:5173"],
    credentials : true
}));

const bookRoutes = require("./src/books/bookroute.js")
const orderRoutes = require("./src/orders/orderRoute.js")
const userRoutes = require("./src/users/userRoute.js");
const adminRoutes = require("./src/stats/adminStats.js")

app.use("/api/books",bookRoutes);
app.use("/api/orders",orderRoutes);
app.use("/api/auth",userRoutes);
app.use("/api/admin",adminRoutes);

const db = process.env.DB_URL;
async function main(){
    mongoose.connect(db);
}

main().then(()=>{
    console.log("connected to database");
}).catch((err) =>{
    console.log("error occured",err);
})



app.get('/',(req,res)=>{
    res.send("hello world");
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})