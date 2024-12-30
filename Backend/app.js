const express = require("express");
const app = express();
require("dotenv").config();
require("./conn/conn");

app.use(express.json());
const User=  require("./routes/user");
const Books = require("./routes/book")
const Favourite = require("./routes/favourite");;
const Cart = require("./routes/cart");
const Order = require("./routes/order");
// const Favourite = require("./routes/favourite");
//routes
app.use("/api/v1", User);
app.use("/api/v1", Books);
app.use("/api/v1", Favourite);
app.use("/api/v1", Cart);
app.use("/api/v1", Order);
// app.get("/", (req, res) => {
//     res.send("Hello from backend");
// });    

// Creating Port
app.listen(process.env.PORT, () => {
    console.log(`Server Started at port ${process.env.PORT}`);
});
