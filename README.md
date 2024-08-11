# URL Shortener Service

This project is a simple URL shortener service built using Node.js, Express.js, and MongoDB. It allows users to submit a URL and receive a shortened version, which can be used to redirect to the original URL.

## Features

- **URL Shortening:** Convert long URLs into short, unique codes.
- **Redirection:** Redirect users to the original URL when they visit the short URL.
- **Validation:** Ensures that the URL provided is valid before shortening.
- **MongoDB Integration:** Stores URLs and their corresponding short codes in a MongoDB database.
Install Dependencies: MongoDB, ExpressJs, valid-url, randomId;
Set Up MongoDB
Ensure that your MongoDB server is running. You can either set up a local MongoDB server or use a cloud-based MongoDB service like MongoDB Atlas.
Configure the Database Connection
The database connection is configured in the config/db.js file. By default, the project connects to a local MongoDB instance:
Run the Application
Start the Node.js server: Node app.js
API Endpoints
You can test the API using tools like Postman or cURL:

POST /shorten
Description: Shortens a URL.
Request Body: JSON object with a single key "url" containing the URL to be shortened.
Response: JSON object with the generated short code
GET /

Description: Redirects to the original URL associated with the provided short code.
Response: HTTP 302 redirect to the original URL.

Project Structure
url-shortener/
├── config/
│   └── db.js             # MongoDB connection configuration
├── models/
│   └── Url.js            # URL schema
├── routes/
│   └── url.js            # API routes
├── app.js                # Main application file
└── package.json          # Project metadata and dependencies


Troubleshooting
If you encounter issues, ensure the following:

MongoDB is running and accessible.
Node.js is installed and up-to-date.
All dependencies are installed (npm install).
