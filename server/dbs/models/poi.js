import mongoose from 'mongoose'

const Schma = mongoose.Schema

const Poi = new Schma({
    name: {
        type: String
    },
    province: {
        type: String
    },
    city: {
        type: String
    },
    areaCode: {
        type: String
    },
    tel: {
        type: String
    },
    area: {
        type: String
    },
    addr: {
        type: String
    },
    type: {
        type: String
    },
    module: {
        type: String
    },
    longitude: {
        type: Number
    },
    latitude: {
        type: Number
    }
})

export default mongoose.model('Poi', Poi);