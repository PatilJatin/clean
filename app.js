const express = require("express");
const RootRoute = require("./frameworks/webserver/routes/root.route");
const ConcreteDatabase = require("./database/db.config");
require("dotenv").config();
const databaseUrl = process.env.MONGO_URL;

const database = new ConcreteDatabase(databaseUrl);

const app = express();

app.use(express.json());
app.use("/", RootRoute);

app.get("/home", (req, res) => {
  res.send("Hello World");
});

// .then(() => {
app.listen(5000, async () => {
  try {
    await database.connect();
    console.log("DB Connected");
  } catch (e) {
    console.log(e.message);
  }
  console.log("Server has started on port 5000");
});

// })
// .catch((error) => {
//   logger.error("Error connecting to the database:", error);
// });
