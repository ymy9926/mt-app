import Router from 'koa-router'
import Poi from '../dbs/models/poi'

const router = new Router({ prefix: '/search' })

router.get('/top', async (ctx) => {

    let postions = await Poi.find({ name: new RegExp(ctx.query.input), city: ctx.query.city });
    console.log(ctx.query.input,ctx.query.city);
    ctx.body = {
        top: postions
    }
})

router.get('/hotPlace', async (ctx) => {
    let city = ctx.store ? ctx.store.geo.position.city : ctx.query.city
    try {
        let result = await Poi.find({
            city,
            type: ctx.query.type || '丽人'
        }).limit(10)

        ctx.body = {
            code: 0,
            result: result.map(item => {
                return {
                    name: item.name,
                    type: item.type
                }
            })
        }
    } catch (e) {
        ctx.body = {
            code: -1,
            result: []
        }
    }
})

export default router