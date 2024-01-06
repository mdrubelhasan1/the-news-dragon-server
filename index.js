const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json')

app.use(cors());
app.get('/', (req, res) => {
    res.send('Dragon server is running!')
  })

  app.listen(port, () => {
    console.log(`Dragon API is running on port ${port}`)
  })

  app.get('/categories', (req, res) =>{
    res.send(categories);
  })