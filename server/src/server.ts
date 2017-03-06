import * as express from 'express';
let port = 4500;

let app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(port,() => {
  console.log(`App listening on ${port}`);
})