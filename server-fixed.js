const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const timeoutId = setTimeout(() => {
    res.status(504).send('Request timed out');
  }, 5000); // Set a 5-second timeout

  // Simulate a long-running task
  setTimeout(() => {
    clearTimeout(timeoutId); // Clear the timeout if the request completes within the time limit
    res.send('Hello World!');
  }, 6000); // Simulate task that finishes after 6 seconds
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});