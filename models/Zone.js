//import the mongoose module
var mongoose = require('mongoose')

//Setup the schema.
//The schema should be planned out before implementing here
//In Mongo, the multivalued attributes
//has to be in an array
var ZoneSchema = new mongoose.Schema({
    name: {type:String, default:''},
    zipCodes: {type:Array, default:[]},
    timestamp: {type:Date, default:Date.now}
})

module.exports = mongoose.model('ZoneSchema', ZoneSchema)


