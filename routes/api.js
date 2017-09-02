//Get the necessary imports
var express = require('express')
var router = express.Router()
var ZoneController = require('../controllers/ZoneController')

//Use '/:resource', not '/resource'
router.get('/:resource', function(req, res, next) {

    //Use params, not param
    var resource = req.params.resource;

    if (resource == 'zone'){
        //function is the callback. This is what is fed to the browser, hence it is json.
        //This is in comparison to the find function in app.js, which calls the callback method in mongoose.
        ZoneController.find(req.query, function(err, results){
             if (err){
                 res.json({
                     confirmation: 'fail',
                     message: 'Not Found'
                 })
               
                 return
             } 
            
             res.json({
                 confirmation: 'success',
                 results: results
             })
        });
    }
})

router.get('/:resource/:id', function(req, res, next){

    var resource = req.params.resource
    var id = req.param.id
    if (resource == 'zone'){
        ZoneController.findById(id, function(err, result){
            if (err){
                res.json({
                    confirmation: 'fail',
                    message: 'Not found '
                })
                return
            }

            res.json({
                confirmation: 'success',
                result: result
            })
        });
    }
})

router.post('/:resource', function(req, res, next){
    
    var resource = req.params.resource
    if(resource == 'zone'){
        //use req.body when receiving data from the form body in the page
        ZoneController.create(req.body, function(err, result){
            if (err){
                res.json({
                    confirmation: 'fail',
                    message: err
                })
                return
            }

            res.json({
                confirmation: 'success',
                result: result
            })
        })
    }
})

module.exports = router