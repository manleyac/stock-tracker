const express = require("express");
const connectDB = require("./config/db.js");
const app = express();

const PORT = process.env.PORT || 5000;

//DB connection
connectDB();

//middleware
app.use(express.json({ extended: false}));

//routes
app.get("/", (req, res) => res.send("API Running"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/portfolio", require("./routes/api/portfolio.js"));

//start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
