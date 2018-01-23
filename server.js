const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);


app.get('/', (req, res) => {
  res.render('index');
});

app.post('/create', (req, res) => {

  res.render('index')
});

app.get('/:urlAlias', (req, res) => {

  res.status(200).send('TODO: Implement me');
});


app.listen(3000, () => {
  console.log('Listening on port 3000.');
});