const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 5000;

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'richard',
});

// Define a route to fetch data from the database
app.get('../Component/Dashboard/data', (req, res) => {
  pool.query('SELECT * FROM signup', (error, results) => {
    if (error) {
      console.error('Error retrieving data from the database:', error);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.json(results);
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
