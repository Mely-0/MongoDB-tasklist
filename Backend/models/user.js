const mongoose = require("mongoose")
mongoose.set('strictQuery', false);
const Schema = mongoose.Schema;
const userSchema = new Schema({
    usuario: String,
    contraseña: String,
    fullName: String,
    email: String,
})
module.exports = mongoose.model("user", userSchema)