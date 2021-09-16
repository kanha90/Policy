const mysql2 = require('mysql2');
const { INTEGER } = require('sequelize/types');
const Schema = mysql2.Schema

const data_setSchema = new Schema({

    Policy_id : {
        type : INTEGER,
        default : 0,
    
    }

})

const User = mysql2.model('data_set', data_setSchema)

module.exports = { User }