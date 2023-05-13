// routes/route/test.js

const router = require("koa-router")();

// 模块路由前缀
router.prefix("/test");

router.get("/", function (ctx, next) {
  ctx.body = {
    r0: 0,
    r1: "get success",
    res: "",
  };
});

router.post("/", function (ctx, next) {
  const request = ctx.request.body;
  // const { username, password } = request;
  ctx.body = {
    r0: 0,
    r1: "post success",
    res: request,
  };
});

router.delete("/", async (ctx) => {
  const request = ctx.request.body;
  const { username, password } = request;
  if (username && password) {
    ctx.body = {
      r0: 0,
      r1: "delete success",
      res: request,
    };
  }
});

module.exports = router;
