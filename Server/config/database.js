const mongoose = require("mongoose")

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,   
})

const database = mongoose.connection

database.on("connected", () => {
    console.log(`Connected to ${database.name} at ${database.host}:${database.port}`)
});