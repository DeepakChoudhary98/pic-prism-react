// there 4 steps to create a basic server
// Express ko bulana padega
const express = require("express");
const dotenv = require("dotenv");
const {connectDb} = require("./connection");
// use to read folder structure
const {readdirSync} = require("fs");



// mport the route here
const authRoute = require("./routes/authRoutes");


// bnding this env
dotenv.config();

// express ko call karna padega ek varable par
const app = express();
// port define karna hoga - Port hota hai darwaja
const port = process.env.PORT || 5000;
connectDb();

// Making Routes
app.get("/", (req, res) => {
    res.send("<center>Server Running...</center>");
})

// how to use routes

// app.use("/api", authRoute);

// importing and using routes dynamically
// contains all files inside routes drectly inside the array, each file is an element of that array
readdirSync("./routes").map((route) => {
    app.use("/api", require(`./routes/${route}`));

});
// 
console.log(readdirSync("./routes"))

// types of requests
// 1. GET -> to get the data from the server
// 2. POST -> To post the data to the server
// 3. PUT -> To update the data on the server
// 4. DELETE -> To delete the data from the server


// Server ko listen karna hoga
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})