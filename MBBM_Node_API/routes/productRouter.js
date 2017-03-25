var express = require('express');

var routes = function(Product) {
    
    var productRouter = express.Router();
    productRouter.route('/products')
    
    // Add a new product
    // ============================================================
    .post(function (req, res) {
    
        var product = new Product();     
        // params comes from request body
        product.ProductName = req.body.ProductName;  
        product.ProductPrice = req.body.ProductPrice;

        // save the bear and check for errors
        product.save(function(err) {
            if(err) {
                res.send(err);
            }
            res.json({ message: 'Product added' });
        });
    })

    // Get list of all products
    // ===========================================================
    .get(function (req, res) {
        Product.find(function (err, products) {
            if(err) {
                res.send(err);
            }
            res.json(products);
        });    
    })

productRouter.route('/products/:ProductID')

    // Get the product with that id
    // ================================================================
    .get(function(req, res) {
        Product.findById(req.params.ProductID, function(err, product) {
            if (err)
                res.send(err);
            res.json(product);
        });
    })

    // Update the product with this id
    // ================================================================
	.put(function(req, res) {
		Product.findById(req.params.ProductID, function(err, product) {
            
            if(product == null) 
                res.send({ message: 'Product not found for this product ID' });
            else {
                if (err)
				res.send(err);

                product.ProductName = req.body.ProductName;  
                product.ProductPrice = req.body.ProductPrice;

                product.save(function(err) {
                    if (err)
                        res.send(err);

                    res.json({ message: 'Product updated!' });
                });
            }
		});
	})

    // Delete the product with productID
    // ================================================================
	.delete(function(req, res) {
		Product.remove({
			_id: req.params.ProductID
		}, function(err, product) {
			if (err)
				res.send(err);

			res.json({ message: 'Product deleted' });
		});
	});
    
    return productRouter;
};

module.exports = routes;
