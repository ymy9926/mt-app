import mongogse from 'mongoose'

const Schema = mongogse.Schema

const Province = new Schema({
    id: {
        type: String,
        require: true
    },
    value: {
        type: Array,
        require: true
    }
})

export default mongogse.model('Province', Province)