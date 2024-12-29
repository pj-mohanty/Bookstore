const express = require("express");
const app = express();
require("dotenv").config();
require("./conn/conn");

app.use(express.json());
const User=  require("./routes/user");
const Books = require("./routes/book")
//routes
app.use("/api/v1", User);
app.use("/api/v1", Books);
// app.get("/", (req, res) => {
//     res.send("Hello from backend");
// });    

// Creating Port
app.listen(process.env.PORT, () => {
    console.log(`Server Started at port ${process.env.PORT}`);
});
