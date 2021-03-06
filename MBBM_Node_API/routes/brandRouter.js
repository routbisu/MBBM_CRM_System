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
                res.json({ ErrorCode: 0, ErrorMessage: "Brand was created." });
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
                if(brands.length == 0) {
                    res.json({ ErrorCode: 999, ErrorMessage: "No brands found!" });
                }
                else {
                    res.json(brands);
                }
            }
        });
    });

    brandRouter.route('/brands/:BrandID')

    // Get a brand from BrandID
    .get(function(req, res) {
        Brand.findById(req.params.BrandID, function(err, brand) {
            if(err) {
                res.status(500).send(err);
            }
            else {
                if(brand == null) {
                    res.json({ ErrorCode: 998, ErrorMessage: "No brand found for this ID!" });
                }
                else {
                    res.json(brand);
                }
            }
        });
    })

    // Edit a brand 
    .put(function(req, res) {
        Brand.findById(req.params.BrandID, function(err, brand) {

            if(brand == null) {
                res.json({ ErrorCode: 997, ErrorMessage: "No brand found for this ID!" });
                return;
            }

            brand.BrandName = req.body.BrandName;

            // Save the brand
            brand.save(function(err) {
                if(err) {
                    res.status(500).send(err);
                }
                else {
                    res.json({ ErrorCode: 0, ErrorMessage: "Brand details were updated." });
                }
            });
        });
    })
    
    // Delete a brand
    .delete(function(req, res) {
        Brand.findById(req.params.BrandID, function(err, brand) {           
            if(brand == null) {
                res.json({ ErrorCode: 997, ErrorMessage: "No brand found for this ID!" });
                return;
            }
            
            Brand.remove({
                _id: req.params.BrandID
            }, function(err, brand) {
                if(err) {
                    res.status(500).send(err);
                    return;
                }
                res.json({ ErrorCode: 0, ErrorMessage: "Brand was deleted." });
            });
        });
    });

    return brandRouter;
};

module.exports = routes;