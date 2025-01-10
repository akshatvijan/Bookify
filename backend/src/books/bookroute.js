const express = require("express");
const router = express.Router();
const Book = require("./book_model");
const {postBook, getAllBooks, getSingleBook,updateBook,deleteBook} = require("./bookController");
const verifyAdminToken = require("../middleware/verifyAdminToken");

// post a book
router.post("/createBook", verifyAdminToken, postBook);

 
// get all books
router.get("/",getAllBooks)

// single book 
router.get("/:id", getSingleBook)

// updaet a book 
router.put("/edit/:id",verifyAdminToken,updateBook);

// delete a book
router.delete("/delete/:id",verifyAdminToken,deleteBook);

module.exports = router;