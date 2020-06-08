const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  const testOnline = 'page is online'
  res.render('list', { testPage: testOnline })
})


const port = process.env.PORT || 3000
app.listen(port, function () {
  console.log(`listening to port ${port}`)
})