var express = require('express');

var routes = function(Brand) {
    
    var brandRouter = express.Router();
    brandRouter.route('/brands')

    .post(function(req, res) {
    
        var brand = new Brand();   
        
        console.log(req);
    
        // Params comes from request body
        brand.BrandName = req.body.BrandName;  

        // Save the bear and check for errors
        brand.save(function(err) {
            if(err) {
                res.status(500).send(err);
            }
            else {
                res.json({ message: 'Brand added' });
            }
        });
    })

    .get(function (req, res) { 
        Brand.find(function(err, brands) {
            if(err) {
                res.status(500).send(err);
            }
            else {
                res.json(brands);
            }
        });
    });
    
    return brandRouter;
}

module.exports = routes;