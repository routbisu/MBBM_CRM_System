var express = require('express');

var routes = function(Product, Brand) {
    
    var productRouter = express.Router();

    productRouter.route('/products')

    // Get all products 
    .get(function (req, res) {
        
        Product.find(req.query, function(err, products) {
            if(err) {
                res.status(500).send(err);
            }
            else {
                if(products.length == 0) {
                    res.json({ ErrorCode: 998, ErrorMessage: "No Products Found." });
                    return;
                }

                res.json(products);
            }
        });
    })

    // Create a new brand
    .post(function(req, res) {
    
        var product = new Product();  
        
        // Params comes from request body
        product.BrandID = req.body.BrandID;
        product.ProductName = req.body.ProductName;
        product.ProductDescription = req.body.ProductDescription;

        // Check if BrandID exists in Brands collection
        Brand.findById(product.BrandID, function(err, brand) {
            if(brand == null) {
                res.json({ ErrorCode: 997, ErrorMessage: "This brand was not found." });
                return;
            }
        });

        // Save the bear and check for errors
        /*
        brand.save(function(err) {
            if(err) {
                res.status(500).send(err);
            }
            else {
                res.json({ ErrorCode: 0, ErrorMessage: "" });
            }
        });
        */
    });

    return productRouter;
}

module.exports = routes;