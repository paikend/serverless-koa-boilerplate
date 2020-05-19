
import * as BodyParser from 'koa-bodyparser';

export function baseMiddleware(app:any, router:any){
app
    .use(BodyParser())
    .use(router.routes())
    .use(router.allowedMethods());
return app
}
// exports baseMiddleware = baseMiddleware;