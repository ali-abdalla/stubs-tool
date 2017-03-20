import { RouterService } from './router-service';
import * as express from 'express';

export let routerRouter = express();

routerRouter.post('/router', (req, res) => {
  RouterService.create(req.body);
});