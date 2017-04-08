const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;

app.use('/', express.static('dist'));

app.get('/greetings', (req, res) => {
  res.send('Is this thing on?');
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});