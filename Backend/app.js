const express = require("express")
const mongoose = require("mongoose")
const app = express()
const port = 8070
const cors = require("cors")
const env = require("dotenv");
const router = require("./routes/tareas.js")
const user = require("./routes/user.js")
env.config();
//RUTES
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))
app.use('/tareas', router)
app.use("/users", user)
//MONGO DB CONECTION
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("conectado a la base de datos");
    })
    .catch((error) => console.log(error));
app.listen(port, () => {
    console.log(`el servidor esta escuchando en http://localhost:${port} `)
})