const { Router } = require('express');
const connection = require('./conf');

const router = Router();

router.get('/api', (req, res) => {
  connection.query('SELECT * FROM users', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des données');
    } else {
      res.json(results);
    }
  });
});

router.post('/signup', (req, res) => {
  const formData = req.body;
  connection.query('INSERT INTO users SET ?', formData, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de l'enregistrement.");
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;
