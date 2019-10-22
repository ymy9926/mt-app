import mongogse from 'mongoose'

const Schema = mongogse.Schema

const menus = new Schema({
    menu: {
        type: Array,
        required: true
    }
})

export default mongogse.model('Menu', menus)