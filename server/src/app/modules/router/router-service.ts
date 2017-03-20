import { URL_METHODS } from './../../common/defines';
import { app } from './../../../server';
import { Router } from './../../models/router.model';
export class RouterService {

  public static create(router: Router) {

    if (router.method === URL_METHODS.GET) {
      app.get(router.url, (req, res) => {
        res.send({
          router: router
        });
      });
      console.log('Created');
    } else if (router.method === URL_METHODS.POST) {
      app.post(router.url, (req, res) => {
        res.send({
          router: router
        });
      });
      console.log('Created');
    } else if (router.method === URL_METHODS.PUT) {
      app.put(router.url, (req, res) => {
        res.send({
          router: router
        });
      });
      console.log('Created');
    } else if (router.method === URL_METHODS.DELETE) {
      app.delete(router.url, (req, res) => {
        res.send({
          router: router
        });
      });
      console.log('Created');
    }
  }
}