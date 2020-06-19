const fs    = require('fs');
const path  = require('path');

const rootDir   = require('../helpers/rootDir');

const p = path.join(
    rootDir,
    'data',
    'product.json');

const getProductFile = callback =>{
    fs.readFile(p,(err,fileContent)=>{
        if(err){
            return callback([]);
        }
        callback(JSON.parse(fileContent));
    });
}

module.exports = class Product {
    constructor(title){
        this.title  = title;
    }

    save(){
        getProductFile(products=>{
            products.push(this);
            fs.writeFile(p,JSON.stringify(products),(err)=>{
                console.log(err);
            });
        });
    }

    static fetchAll(callback){
        getProductFile(callback);
    }
}