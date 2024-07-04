import express from "express";
import { PORT, MongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookmodels.js";

var app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/books", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.send({
        message: "Enter all the details such as title,author and publichyear",
      });
    }
    const newBooks = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };
    const book = await Book.create(newBooks);
    return res.send(book);
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`App is listening at port ${PORT}`);
});

mongoose
  .connect(MongoDBURL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App is listening at port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

const DEFAULT_PORT = 5555;

portfinder.basePort = DEFAULT_PORT;
const portfinder = require("portfinder");
portfinder
  .getPortPromise()
  .then((port) => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Error finding an available port:", err);
    process.exit(1);
  });
