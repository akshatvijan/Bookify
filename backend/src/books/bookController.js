const Book = require("./book_model");

module.exports.postBook = async (req, res) => {
  try {
    const newBook = new Book({ ...req.body });
    await newBook.save();
    res
      .status(200)
      .send({ message: "Book posted successfully", book: newBook });
  } catch (err) {
    console.log("Error creating book ", err);
    res.status(500).send({ message: "Failed to create book" });
  }
};

module.exports.getAllBooks = async (req, res) => {
  try {
    const Allbooks = await Book.find().sort({ createdAt: -1 });
    res.status(200).send(Allbooks);
  } catch (err) {
    console.log("Error while rendering all the books", err);
    res.status(500).send({ message: "Failed to render books" });
  }
};

module.exports.getSingleBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      res.status(404).send({ message: "Book not Found!" });
    }
    res.status(200).send(book);
  } catch (err) {
    console.log("Error while rendering the book");
    res.status(500).send({ message: "Failed to render book" });
  }
};

module.exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedBook) {
      res.status(404).send({ message: "Book not found!" });
    }
    res
      .status(200)
      .send({ message: "Book updated successfully", book: updatedBook });
  } catch (err) {
    console.log("Error while updating the book", err);
    res.status(500).send({ message: "Failed to update the book" });
  }
};

module.exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      res.status(404).send({ message: "Book is not Found!" });
    }
    res.status(200).send({ messge: "Book deleted successfully", deletedBook });
  } catch (err) {
    console.log("Failed to delete book", err);
    res.status(500).send({ message: "Faild to delete book" });
  }
};
