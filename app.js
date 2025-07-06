const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hi I am Ashok Kethavath Welcome to new world!');
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
