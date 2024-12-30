import mongoose from "mongoose";

const HouseInfo = new mongoose.Schema({
    squareMeter: { type: String },
    square: { type: String },
    foundationType: { type: String },
    floors: { type: Number },
    bedrooms: { type: Number },
    type: { type: String },
    bathrooms: { type: Number },
    reservePower: { type: Boolean },
    description: { type: String },
    pictures: { type: Array },
    name: { type: String },
    views: { type: Number }
})

export default mongoose.model('HouseInfo', HouseInfo)