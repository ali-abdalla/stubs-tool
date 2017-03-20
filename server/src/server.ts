import { routerRouter } from './app/modules/router/router-router';
import * as express from 'express';
import * as bodyParser from 'body-parser';
var removeRoute = require('express-remove-route');

let port = 4500;

export let app = express();
app.use(bodyParser.json());

app.use(routerRouter);

app.listen(port,() => {
  console.log(`App listening on ${port}`);
})