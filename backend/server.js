const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const exercisesRouter = require("./routes/exercise")
const usersRouter = require("./routes/user")

require("dotenv").config()

const app=express()

const port = 9000

app.use(cors())
app.use(express.json()) //handle all incoming requests if there is json and converting them to objects 


mongoose.connect(process.env.ATLAS_URI)
mongoose.connection.once("open",()=>console.log("MongoDB connection successfull"))

app.use("/exercises",exercisesRouter)
app.use("/users",usersRouter)






app.listen(port,()=>console.log("Server Running on port 9000"))