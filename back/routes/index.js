const { Router } = require('express');

const router = Router();

/* GET index page. */
router.get('/', (req, res) => {
  res.send('Hello World !');
});

router.post('/signup', (req, res) => {
  res.send('I am in POST signup');
});

module.exports = router;
