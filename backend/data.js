import express from "express";
import mongoose from "mongoose";

import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/bookstore", {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});

const BookstoreData = new mongoose.Schema({
  name: String,
  author: String,
  rating: Number,
});

const BookstoreModel = mongoose.model("books", BookstoreData);

app.get("/getBooks", (req, res) => {
  BookstoreModel.find()
    .then((books) => res.json(books))
    .catch((err) => res.json(err));
});

app.get("/deleteBook/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const result = await BookstoreModel.deleteOne({ _id: id });

    res.json({ message: "Book deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/getBook/:id", (req, res) => {
  const { id } = req.params;

  BookstoreModel.findById({ _id: id })
    .then((book) => {
      if (!book) {
        return res.status(404).json({ message: "Book not found" });
      }
      res.json(book);
    })
    .catch((err) => res.status(500).json({ error: err.message }));
});

app.get("/", (req, res) => {
  res.send("Book store");
});

app.post("/updateBook/:id", async (req, res) => {
  const id = req.params.id;
  const { name, author, rating } = req.body;

  try {
    const result = await BookstoreModel.updateOne(
      { _id: id },
      {
        $set: {
          name,
          author,
          rating,
        },
      }
    );

    res.json({ message: "Book updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/addBook", (req, res) => {
  const newBook = new BookstoreModel(req.body);

  newBook
    .save()
    .then(() => res.json({ message: "Book added successfully" }))
    .catch((err) => res.status(500).json({ error: err.message }));
});

app.listen(3000, () => {
  console.log("port is listen at 3000");
});
