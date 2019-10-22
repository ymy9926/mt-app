import Router from 'koa-router';
import axios from './utils/axios'
import Categroy from '../dbs/models/category'

let router = new Router({ prefix: '/categroy' })

const sign = 'abcd';

router.get('/crumbs', async (ctx) => {
    //let cate = new Categroy({ city: '广州', types: [], areas: [] });
    //let result = await cate.save();
    let result = await Categroy.findOne({ city: ctx.query.city.replace('市', '') || '北京' });
    console.log(result)
    if (result) {
        ctx.body = {
            areas: result.areas,
            types: result.types
        }
    } else {
        ctx.body = {
            areas: [],
            types: []
        }
    }

})


export default router;
