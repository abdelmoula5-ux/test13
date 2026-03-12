const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const http = require("http")
const { Server } = require("socket.io")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1/quiz-platform")

const server = http.createServer(app)
const io = new Server(server,{cors:{origin:"*"}})

io.on("connection",(socket)=>{
  console.log("user connected")
  socket.on("vote",(data)=>{
    io.emit("updateResults",data)
  })
})

app.use("/api/auth",require("./routes/auth"))
app.use("/api/quiz",require("./routes/quiz"))

server.listen(5000,()=>{
  console.log("Server running on port 5000")
})