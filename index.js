//load .env file contents into process.env by default

require('dotenv').config()
const express=require('express')
const cors=require('cors')
const router=require('./Routes/routes')
require('./DB/connection')

//creating express server instance
const pfServer=express()

//configuring cors into server

pfServer.use(cors())

//configuring json conversion on server
pfServer.use(express.json())

//configuring router into server
pfServer.use(router)

//serving uploaded files to client side
pfServer.use('/uploads',express.static('./uploads'))

const PORT=3000

//calling listen method to impliment listen mode for server to run

pfServer.listen(PORT,()=>{
    console.log(`server is running at :${PORT}`);
})

//setting response for base_url get request
pfServer.get('/',(req,res)=>{
    res.status(200).send("<h1>The get request Hit Successfully </h1>")
    
})