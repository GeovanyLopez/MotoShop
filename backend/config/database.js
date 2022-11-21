const mongoose = require('mongoose');

const connectDataBase = () => {
    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser : true,
        useUnifiedTopology : true
    }).then( con => {
        console.log(`Base de datos mongoDB Conectado con el servidor: ${con.connection.host} `)
    })
}
module.exports = connectDataBase
