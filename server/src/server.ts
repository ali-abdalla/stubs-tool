import * as express from 'express';
import * as bodyParser from 'body-parser';
var removeRoute = require('express-remove-route');

let port = 4500;

let app = express();
app.use(bodyParser.json());

app.post('/', (req, res) => {
  app.post('/' + req.body.url, (req, res) => {
    console.log("New Route");
    res.send({
      r1: app.routes,
      r2: app._router.stack.map(route => route.path),
      r3: app.unsubscribe.toString()
      
    });
  });
  console.log("Route Created");  
  res.sendStatus(201);
})

app.delete('/', (req, res) => {
  // removeRoute(app, '/' + req.body.url);
  for (let i = 0; i < app._router.stack.length; i++) {
    if (app._router.stack[i].path === '/' + req.body.url) {
      app._router.stack.splice(i, 1);
      console.log('Route Deleted');
      break;
    }
  }
  res.sendStatus(200);  
})

app.listen(port,() => {
  console.log(`App listening on ${port}`);
})