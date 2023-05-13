const Koa = require("koa");
const app = new Koa();

const bodyparser = require("koa-bodyparser");

// app.use(async (ctx) => {
//   ctx.body = "Hello World";
// });

app.on("error", (err) => {
  log.error("server error", err);
});

// 参数解析
app.use(bodyparser());

// 静态资源路由
app.use(require("koa-static")(__dirname + "public"));

// 注册路由
const router = require("./routers/index");
app.use(router.routes(), router.allowedMethods());

const host = "127.0.0.1";
const port = 8080;
app.listen(port, host, (err, res) => {
  if (err) console.log(err);

  console.log(`Bootstrap Successful, Address: http://${host}:${port} `);
});
