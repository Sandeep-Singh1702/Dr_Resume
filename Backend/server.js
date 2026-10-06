require("dotenv").config() // helps to acces the variables of .env file in the express server
const app = require("./src/app.js")
const connectToDB = require("./src/config/database.js")

connectToDB()

app.listen(3000,()=>{
    console.log("Server is running on Port 3000")
})