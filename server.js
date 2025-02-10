const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // This line causes the error when the request takes too long to process
  res.send('Hello World!'); 
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});