const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

const { startVerify, endVerify } = require('./verify');

router.get('/startVerify', async (ctx, next) => {
  //   console.log(query);
  ctx.body = await startVerify(`+${ctx.request.query.to}`, 'call');
});

router.get('/endVerify', async (ctx, next) => {
  const { to, code } = ctx.request.query;
  console.log(query);
  ctx.body = await endVerify(`+${to}`, code);
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
