const Koa = require('koa')
const Router = require('koa-router')
const mockList = require('./mock/index.js')
const app = new Koa()
const router = new Router()
async function getRes(fn,ctx){
  return new Promise(resolve=>{
    setTimeout(()=>{
      const res = fn(ctx)
      resolve(res)
    },1000)
  })
}
//注册mock路由
mockList.forEach(item => {
  const {url,method,response} = item
  router[method](url,async ctx=>{
    // const res = response()
    //模拟网络请求的加载状态，1s
    const res = await getRes(response,ctx)
    ctx.body = res
  })
});
app.use(router.routes())
app.listen(3000,()=>{
  console.log('mock server is running at port 3000,http://localhost:3000/')
})