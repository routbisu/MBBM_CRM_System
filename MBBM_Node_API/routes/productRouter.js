var express = require('express');

var routes = function(Product, Brand) {
    
    var productRouter = express.Router();

    productRouter.route('/products')

    // Create a new brand
    .post(function(req, res) {
    
        var product = new Product();  
        
        // Params comes from request body
        product.BrandID = req.body.BrandID;
        product.ProductName = req.body.ProductName;
        product.ProductDescription = req.body.ProductDescription;

        // Check if ProductID exists in Brands collection
        Brand.findById(product.BrandID, function(err, brand) {
            if(brand == null) {
                res.json({ ErrorCode: 999, ErrorMessage: "This brand was not found." });
                return;
            }
        });

       // Save the product
       product.save(function(err) {
            if(err) {
                res.status(500).send(err);
            }
            else {
                res.json({ ErrorCode: 0, ErrorMessage: "Product was created." });
            }
       });
    })

    // Get all products 
    .get(function (req, res) {
        
        Product.find(req.query, function(err, products) {
            if(err) {
                res.status(500).send(err);
            }
            else {
                if(products.length == 0) {
                    res.json({ ErrorCode: 998, ErrorMessage: "No products Found!" });
                    return;
                }

                res.json(products);
            }
        });
    });

    productRouter.route('/products/:ProductID')

    // Get a product from ProductID
    .get(function(req, res) {
        Product.findById(req.params.ProductID, function(err, product) {
            if(err) {
                res.status(500).send(err);
            }
            else {
                if(product == null) {
                    res.json({ ErrorCode: 997, ErrorMessage: "No product found for this ID!" });
                }
                else {
                    res.json(product);
                }
            }
        });
    })

    // Edit a product 
    .put(function(req, res) {
        Product.findById(req.params.ProductID, function(err, product) {

            if(product == null) {
                res.json({ ErrorCode: 996, ErrorMessage: "No product found for this ID!" });
                return;
            }

            product.BrandID = req.body.BrandID;
            product.ProductName = req.body.ProductName;
            product.ProductDescription = req.body.ProductDescription;

            // Check if ProductID exists in Brands collection
            Brand.findById(product.BrandID, function(err, brand) {
                if(brand == null) {
                    res.json({ ErrorCode: 999, ErrorMessage: "This brand was not found." });
                    return;
                }
            });

            // Save the product
            product.save(function(err) {
                if(err) {
                    res.status(500).send(err);
                }
                else {
                    res.json({ ErrorCode: 0, ErrorMessage: "Product details were updated." });
                }
            });
        });
    })
    
    // Delete a product
    .delete(function(req, res) {
        Product.findById(req.params.ProductID, function(err, product) {
            if(product == null) {
                res.json({ ErrorCode: 996, ErrorMessage: "No product found for this ID!" });
                return;
            }

            Product.remove({
                _id: req.params.ProductID
            }, function(err, product) {
                if(err) {
                    res.status(500).send(err);
                    return;
                }
                res.json({ ErrorCode: 0, ErrorMessage: "Product was deleted." });
            });
        });
    });

    return productRouter;
}

module.exports = routes;