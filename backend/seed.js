require('dotenv').config();
const mongoose = require('mongoose');
const Book = require('./src/books/book_model');
const fs = require('fs');
const path = require('path');

const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ Connected to MongoDB for seeding');

        // Clear existing books
        await Book.deleteMany({});
        console.log('✅ Cleared existing books collection');

        // Read books.json
        const booksPath = path.join(__dirname, '../frontend/public/books.json');
        const booksData = JSON.parse(fs.readFileSync(booksPath, 'utf-8'));

        // Remove _id from payload since MongoDB will auto-generate it if _id is numeric
        const booksToInsert = booksData.map(({ _id, ...rest }) => rest);

        // Insert books
        await Book.insertMany(booksToInsert);
        console.log(`✅ Successfully seeded ${booksToInsert.length} books`);

        mongoose.connection.close();
        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding data:', error);
        process.exit(1);
    }
};

seedDB();
