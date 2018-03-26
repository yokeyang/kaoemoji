'use strict'
const mysql = require('mysql')
const fs = require('fs')
// 创建数据池
const pool = (db) => {
    let mypoll = mysql.createPool({
        host: '127.0.0.1',
        user: 'root',
        password: 'yang218906',
        database: db,
        connectionLimit:100
    })
    return mypoll
} 
function con(db,sql,ctx) {
    return new Promise(resolve => {
        pool(db).getConnection((err, connection) => {
            if(err){
                console.log(ctx)
                ctx.body = {err:true}
            }else{
                connection.query(sql, (error, results, fields) => {
                    connection.release();
                    resolve(results)
                })
            }
        })
    })
}

exports.getEmoji = async (ctx,next) => {
    try {
        let body = ctx.request.body;
        let result = await con('emoji', `select * from ${body.category}`,ctx)
        ctx.result = result
        await next()
    } catch (error) {
        ctx.body = error
    }
}

exports.getkaomojiIndex = async (ctx, next) => {
    try {
        let body = ctx.request.body;
        let result = await con('kaomoji', `select text_chinese from ${body.category} group by text_chinese`,ctx)
        ctx.result = result
        await next()
    } catch (error) {
        ctx.body = error
    }
}

exports.getkaomoji = async (ctx,next) => {
    try {
        let body = ctx.request.body;
        let result = await con('kaomoji', `select * from ${body.category} where text_chinese like "${body.text}"`,ctx)
        ctx.result = result
        await next()
    } catch (error) {
        ctx.body = error
    }
}

exports.search = async (ctx,next) => {
    try {
        let body = ctx.request.body;
        let search = body.text;
        let result = []
        let emoji = /[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/.exec(search)
        let tables = []
        if(emoji !== null){
            tables = await con('emoji', `show tables`,ctx)
            await (function(){
                return new Promise(resolve => {
                    tables.forEach(table => {
                        con('emoji', `select * from ${table.Tables_in_emoji} where BINARY emoji like '%${emoji[0]}%'`,ctx).then(data => {
                            resolve(result.push.apply(result,data))
                        })
                    });
                })
            })()
            ctx.body = result
        }
        tables = await con('emoji', `show tables`,ctx)
        await (function(){
            let i = 0            
            return new Promise(resolve => {
                tables.forEach((table,i) => {
                    con('emoji', `select * from ${table.Tables_in_emoji} where text_chinese like "%${search}%"`,ctx).then(data => {
                        if(++i == tables.length){
                            resolve(result)
                        }
                        result.push.apply(result,data)
                    })
                });
            })
        })()

        tables = await con('kaomoji', `show tables`,ctx)
        await (function(){
            let i = 0
            return new Promise(resolve => {
                tables.forEach((table) => {
                    con('kaomoji', `select * from ${table.Tables_in_kaomoji} where text_chinese like "%${search}%"`,ctx).then(data => {
                        if(++i == tables.length){
                            resolve(result)
                        }                        
                        result.push.apply(result,data)
                    })
                });
            })
        })()
        ctx.result = result
        await next()
        // let result = await con('kaomoji', `select * from ${body.category} where text_chinese like "${body.text}"`)
    } catch (error) {
        ctx.body = error
    }
}