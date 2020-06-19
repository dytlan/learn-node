//Export Model Product(Class)
const Product    = require('../models/product');

exports.getProduct = (req,res,next)=>{
    Product.fetchAll(products=>{
        res.render('shop',{
            prods: products,
            pageTitle: 'My Shop',
            path: '/',
        });
    });
}

exports.getAddProduct = (req,res,next)=>{
    res.render('add-product',{
        pageTitle: 'Add Product',
        path: '/admin/add-product'
    });
}

exports.postAddProduct = (req,res,next)=>{
    const product = new Product(req.body.title);
    product.save();
    return res.redirect('/');
}