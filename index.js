const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
dotenv.config({ path: "./config.env" });

mongoose.connect(process.env.DB_URI)
  .then(() => console.log("\n>> Database has been connected successfully."))
  .catch((err) => console.log(err));

app.use(require("./router"));

app.listen(PORT, () => {
  console.log(`\n\n>> Server is listening at PORT : ${PORT}`);
});