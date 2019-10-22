import Router from 'koa-router'
import axios from './utils/axios'
import Menu from '../dbs/models/menu'
import Province from '../dbs/models/province'
import City from '../dbs/models/city'

const router = new Router({ prefix: '/geo' })

const sign = ''

router.get('/getPosition', async (ctx) => {

    ctx.body = {
        province: '海南省',
        city: '三亚市'
    }
})

router.get('/province', async (ctx) => {
    const province = await Province.find()
    ctx.body = {
        province: province.map(item => {
            return {
                id: item.id,
                name: item.value[0]
            }
        })
    }
})

router.get('/province/:id', async (ctx) => {
    const result = await City.findOne({ id: ctx.params.id })

    ctx.body = {
        code: 0,
        city: result.value.map(item => {
            return {
                province: item.province,
                id: item.id,
                name: item.name === '市辖区' || item.name === '省直辖县级行政区' ? item.province : item.name
            }
        })
    }
})

router.get('/city', async (ctx) => {
    let city = [];
    let result = await City.find();
    result.forEach(item => {
        city = city.concat(item.value)
    });

    ctx.body = {
        code: 0,
        city: city.map(item => {
            return {
                province: item.province,
                id: item.id,
                name: item.name === '市辖区' || item.name === '省直辖县级行政区' ? item.province : item.name
            }
        })
    }
})

router.get('/hotCity', async (ctx) => {
    let list = [
        '北京市',
        '上海市',
        '广州市',
        '深圳市',
        '天津市',
        '西安市',
        '杭州市',
        '南京市',
        '武汉市',
        '成都市'
    ]
    let nList = [];
    let result = await City.find();
    //console.log(result);
    result.forEach(item => {
        nList = nList.concat(item.value.filter(k => list.includes(k.name) || list.includes(k.province)))
    })
    ctx.body = {
        hots: nList.map((item) => {
            return {
                province: item.province,
                id: item.id,
                name: item.name === '市辖区' || item.name === '省直辖县级行政区' ? item.province.replace('市', '') : item.name.replace('市', '')
            }
        })
    }
})

router.get('/menus', async (ctx) => {
    const result = await Menu.findOne()
    ctx.body = {
        menu: result.menu
    }
})

export default router