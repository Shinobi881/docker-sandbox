const express = require('express');

const app = express();
const PORT = process.env.PORT || 5002;

app.get('/', (req, res) => {
  res.send('Is this thing on?');
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});