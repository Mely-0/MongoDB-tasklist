const mongoose = require("mongoose")
const user = require("./user")
mongoose.set('strictQuery', false);
const Schema = mongoose.Schema;
const taskcShema = new Schema({
    tarea: String,
    descripcion: String,
    user: { type: Schema.ObjectId, ref: user }
})

module.exports = mongoose.model('tarea', taskcShema)