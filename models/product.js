const fs    = require('fs');
const path  = require('path');

const rootDir   = require('../helpers/rootDir');

//Specify the path for store local data
const p = path.join(
    rootDir,
    'data',
    'product.json');

//for reading file and convert the text in the file to javascript object    
const getProductFile = callback =>{
    fs.readFile(p,(err,fileContent)=>{
        if(err){
            return callback([]);
        }
        callback(JSON.parse(fileContent));
    });
}

//Export Class
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