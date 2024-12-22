const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
// require('dotenv').config();

const app = express();
const PORT =  3001;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
const db = mysql.createConnection({
  host: 'localhost', 
  user: 'root',
  password: 'MySqL321@',
  database:'CHECKINGECOMMERCE',
});

db.connect(err => {
  if (err) {
      console.error('Error connecting to MySQL:', err.message);
      process.exit(1); // Exit if connection fails
  }
  console.log('Connected to MySQL database');
});

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
});
app.get('/api/about', (req, res) => {
    res.send('Welcome to the About Page!');
});
app.get('/api/contact', (req, res) => {
    res.send('Welcome to the Contact Page!');
});
app.use((req, res) => {
    res.status(404).send('404 Not Found!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
