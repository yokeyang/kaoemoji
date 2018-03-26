const Koa = require('koa'),
    bodyparser = require('koa-bodyparser'),
    app = new Koa();

app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}))

require('./router/index')(app)
app.listen(3001)
console.log('http://localhost:3001')