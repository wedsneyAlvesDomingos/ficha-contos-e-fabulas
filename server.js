const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3000;

const db = new sqlite3.Database('cabeçalho.db'); // Change the database name as needed

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public", {
  index: false,
  immutable: true,
  cacheControl: true,
  maxAge: "30d"
}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/views/Landing.html'); // Uppercase "L" for "Landing.html"
});

app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
  db.run(sql, [name, email], function(err) {
    if (err) {
      return console.error(err.message);
    }
    res.send(`New user added with ID: ${this.lastID}`);
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
