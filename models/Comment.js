//import the mongoose module
var mongoose = require('mongoose')

//Setup the schema.
//The schema should be planned out before implementing here
//In Mongo, the multivalued attributes
//has to be in an array
var CommentSchema = new mongoose.Schema({
    username: {type:String, defualt:''},
    body: {type:String, defualt:''},
    timestamp: {type:Date, default:Date.now}
})

model.export = mongoose.model('CommentSchema', CommentSchema)


