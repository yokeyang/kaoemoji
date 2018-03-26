module.exports = (app) =>{

    const Router = require('koa-router')
    const sql = require('../middlewares/sql')
    // const checkcookie = require('../middlewares/checkcookie')
    var router = new Router()
    router.post('/getEmoji',sql.getEmoji, async (ctx,next)=> {
        ctx.body = {res:ctx.result}
    })
    router.post('/getKaomoji', sql.getkaomoji, async (ctx, next) => {
        ctx.body = { res: ctx.result }
    })
    router.post('/getKaomojiIndex', sql.getkaomojiIndex, async (ctx, next) => {
        ctx.body = { res: ctx.result }
    })
    router.post('/search', sql.search, async (ctx, next) => {
        ctx.body = { res: ctx.result }
    })
    app.use(router.routes())
        .use(router.allowedMethods())
}