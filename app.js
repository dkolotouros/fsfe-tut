const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send("Hello World!")
});
 
app.get('/teapot', (req, res) => {
  res.set("X-tea", true).status(418).send('im a little teapot')
});
 

app.listen(port, () => console.log(`app listening on port ${port}`))
