const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

const itemsList = [];
app.get('/', function (req, res) {
  const testOnline = 'page is working as intended'
  res.render('list', { testPage: testOnline, taskList: itemsList })
})

app.post('/', function (req, res) {
  let item = req.body.siham
  itemsList.push(item)
  res.redirect('/');
})


const port = process.env.PORT || 3000
app.listen(port, function () {
  console.log(`listening to port ${port}`)
})