const db = require('./db');
const app = require("express")();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = 5000

app.get('/', async (req, res) => {
  const data = await db.getData();
  console.log(data);
  res.send(data);
})

app.post('/', async (req, res) => {
  const data = await db.setData(req.body);
  res.send();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})