// const express = require("express");
// const app = express();
// require("dotenv").config();
// require("./conn/conn");
// const cors = require("cors");
// app.use(cors());
// app.use(express.json());
// const User=  require("./routes/user");
// const Books = require("./routes/book")
// const Favourite = require("./routes/favourite");;
// const Cart = require("./routes/cart");
// const Order = require("./routes/order");
// // const Favourite = require("./routes/favourite");
// //routes
// app.use("/api/v1", User);
// app.use("/api/v1", Books);
// app.use("/api/v1", Favourite);
// app.use("/api/v1", Cart);
// app.use("/api/v1", Order);
// // app.get("/", (req, res) => {
// //     res.send("Hello from backend");
// // });    

// // Creating Port
// app.listen(process.env.PORT, () => {
//     console.log(`Server Started at port ${process.env.PORT}`);
// });

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./conn/conn");

dotenv.config(); // Load environment variables
connectDB(); // Establish database connection

const app = express();

// Middleware
app.use(cors({ origin: "http://localhost:5173" })); // Allow requests from frontend
app.use(express.json()); // Parse incoming JSON requests

// Importing Routes
const User = require("./routes/user");
const Books = require("./routes/book");
const Favourite = require("./routes/favourite");
const Cart = require("./routes/cart");
const Order = require("./routes/order");

// API Routes
app.use("/api/v1", User);
app.use("/api/v1", Books);
app.use("/api/v1", Favourite);
app.use("/api/v1", Cart);
app.use("/api/v1", Order);

// Root Route (Optional for Testing)
app.get("/", (req, res) => {
  res.send("Hello from backend");
});

// Start Server
const PORT = process.env.PORT || 5000; // Fallback to port 5000 if PORT is undefined
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
