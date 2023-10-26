const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

const db = new sqlite3.Database('cabecalho.db', (err) => {
  if (err) {
      console.error(err.message);
  }
  console.log('Connected to the SQLite database.');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public", {
  index: false,
  immutable: true,
  cacheControl: true,
  maxAge: "30d"
}));

app.post('/submit', (req, res) => {
  const {
      nome,
      raca,
      antecedente,
      especializacao,
      especializacao2,
      profissao,
      combateCorpoACorpo,
      combateArcano,
      combateADistancia,
      valorDeDefesa,
      velocidadeDeMovimento,
      danoFisico,
      danoMagico,
      danoBonus,
      gold,
      silver,
      bronze
  } = req.body;

  const sql = `
      INSERT INTO personagens (nome, raca, antecedente, especializacao, especializacao2, profissao, combateCorpoACorpo, combateArcano, combateADistancia, valorDeDefesa, velocidadeDeMovimento, danoFisico, danoMagico, danoBonus, gold, silver, bronze)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.run(sql, [nome, raca, antecedente, especializacao, especializacao2, profissao, combateCorpoACorpo, combateArcano, combateADistancia, valorDeDefesa, velocidadeDeMovimento, danoFisico, danoMagico, danoBonus, gold, silver, bronze], function (err) {
      if (err) {
          return console.error(err.message);
      }
      console.log(`A row has been inserted with rowid ${this.lastID}`);
  });

  res.redirect('/');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/views/Landing.html'); // Uppercase "L" for "Landing.html"
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
