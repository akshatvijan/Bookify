# Bookify - MERN Stack Bookstore

Bookify is a fully functional bookstore built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to explore and purchase books, while admins can manage the book inventory.

## Features

- **User Authentication:** Google login integration for secure user access.
- **Book Management (Admin Only):**
  - Add new books
  - Update book details
  - Delete books
- **Book Purchase:** Users can purchase books seamlessly.
- **User-Friendly Interface:** Built with React for a dynamic and engaging user experience.

## Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** Google OAuth

## Installation

1. Clone the repository:
   ```bash
   git clone <repo-url>
   ```
2. Install dependencies:
   ```bash
   cd Bookify
   npm install
   ```
3. Set up the environment variables:
   - Create a `.env` file in the root directory and add:
     ```plaintext
     MONGO_URI=<your-mongodb-uri>
     JWT_SECRET_KEY=<your-secret>
     VITE_API_KEY = <your-vite-api-key>
     VITE_AUTH_DOMAIN = <your-vite-auth-domain>
     VITE_PROJECT_ID = <your-vite-project-id>
     VITE_STORAGE_BUCKET: <your-vite-storage-bucket>
     VITE_MESSAGING_SENDER_ID: <your-vite-messaging-sender-id>
     VITE_APP_ID:<your-vite-app-id>
     ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## Usage

- **Admin Dashboard:** Access restricted to authorized admin users for book management.
- **User:** Users can browse books, add them to the cart, and proceed with purchases.

## Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request.

here's the workin video of project ->


https://github.com/user-attachments/assets/834db3a6-23f6-4f16-be0b-cf7c74437da6

