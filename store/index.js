import Vue from 'vue'
import Vuex from 'vuex'
import geo from './modules/geo'
import home from './modules/home'
import axios from 'axios'

Vue.use(Vuex)

const store = () => new Vuex.Store({
    modules: {
        geo,
        home
    },
    actions: {
        async nuxtServerInit({
            commit
        }, { req, app }) {
            const { status, data: { province, city } } = await axios.get('http://localhost:3000/geo/getPosition')
            commit('geo/setPosition', status === 200 ? { city, province } : { city: '', province: '' })
            const { status: status2, data: { menu } } = await axios.get('http://localhost:3000/geo/menus')
            commit('home/setMenu', status2 === 200 ? menu : [])
        }
    }
})

export default store