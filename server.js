const express = require('express');
const app = express();

app.get('', (req, res) => {
  return res.send('This is Working');
});

app.listen(process.env.PORT || 5000);
