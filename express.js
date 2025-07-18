const express = require('express');

const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('HELLO');
});

app.listen(port, () => {
  console.log(`server app listening on port ${port}`);
});

// https://expressjs.com/ko/starter/hello-world.html
