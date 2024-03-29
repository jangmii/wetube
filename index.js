import express from "express"
//const express = require('express')
import morgan from "morgan"
import helmet from "helmet"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"
const app = express()

const PORT=4000

const handelListening=()=>
    console.log(`Listening on:http://localhost:${PORT}`)

const handleHome = (req,res) => res.send("Hello from Home")

const handleProfile=(req,res) => res.send("You are my profile") //arrow function(ES6)

const betweenHome=(req,res,next)=>{ //middleware
    console.log("I'm between")
    next()
}

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(helmet()) //보안관련
app.use(morgan("dev"))

app.get("/", handleHome)

app.get("/profile",handleProfile)
app.listen(PORT,handelListening)      

