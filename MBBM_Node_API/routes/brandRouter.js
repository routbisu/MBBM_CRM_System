/**
 * brandRouter.js -> API router for adding, deleting, modifying and retrieving any product's brand
 */

var express = require('express');

var routes = function(Brand) {
    
    var brandRouter = express.Router();

    brandRouter.route('/brands')

    // Create a new brand
    .post(function(req, res) {
    
        var brand = new Brand();  
        
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

    // Get all brands or filtered based on query string
    .get(function (req, res) {
        Brand.find(req.query, function(err, brands) {
            if(err) {
                res.status(500).send(err);
            }
            else {
                res.json(brands);
            }
        });
    });

    brandRouter.route('/brands/:BrandID')

    .get(function(req, res) {
        
    })
    
    return brandRouter;
}

module.exports = routes;