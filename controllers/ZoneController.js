//import the models/resources
var Zone = require('../models/Zone')

//Inside the export, set up the main CRUD operators
module.exports = {
    //In each we define the Mongoose callbacks that execute the requests

    find: function(params, callback){
        //This being a pure javascript, it can be reused in any project/context.
        //The parameter zones is plural because a collection is retrieved
       Zone.find(params, function(err, zones){
            if (err){
                //by convention, err is always first, and payload the second
                callback(err, null)
                return
            }
            //on success, the convention dictates they are interchanged
            callback(null, zones)
        });
    },
    findById: function(id, callback){
        //mongoose function
        //use zone rather than the plural zones since it is only one that is to be returned
        Zone.findById(id, function(err, zone){
            if (err){
                callback(err, null)
                return
            }
            callback(null, zone)
        })

    },
    create: function(){
        Zone.create(params, function(err, zone){
            if (err){
                callback(err, null)
                return
            }
            callback(null, zone)
        })
    },
    update: function(){

    },
    destroy: function(){

    }
}