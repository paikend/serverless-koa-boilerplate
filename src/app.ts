import * as Koa from 'koa';
import * as Router from 'koa-router';
import {baseMiddleware} from './middlewares/base'

export function configureApp() {
  const app = new Koa();
  const router = new Router();
  baseMiddleware(app,router);
  
  router.get('/',async(ctx, next)=>{
    ctx.body = "Hello world"
  });
  
  return app;
}