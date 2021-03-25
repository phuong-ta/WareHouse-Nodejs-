var db = require('./config/database');
var obj = [];
// Show all item from db
exports.list = function(req, res, next){
    let sql = `SELECT * FROM khohang`;
    db.query(sql, function( err, result){
        if(err){
            throw err;
        }else{
            obj = {list: result};
            res.render("list",obj);
        }});
}
// Get/addnew(render add new item page)
exports.addnew = function(req,res,next){
    res.render('addnew');
}
// GET/Transfer
exports.transfer = function(req,res,next){
    let sql = `SELECT * FROM khohang`;
    db.query(sql, function( err, result){
        if(err){
            throw err;
        }else{
            obj = {list: result};
            res.render("transfer",obj);
        }});
}
// Creat new item
exports.create = function( req,res,next) {
    var product = req.body.product;
    var brand = req.body.brand;
    var size = req.body.size;
    var color = req.body.color;
    var price = req.body.price;
    var quantity = req.body.quantity;
    let sql = `insert into khohang(Product, Brand, Size, Color, Price, Quantity) values("${product}","${brand}", "${size}","${color}","${price}","${quantity}")`;
    db.query(sql, function(err,result){
    if (err) {
        throw err;
    } else {
        res.redirect('/store');
    }});

    }
// Delete Item
exports.delete = function(req,res,next){
    var id = req.params.id;
    var sql = `DELETE FROM khohang where ID = "${id}"`;
    db.query(sql,function(err,result){
    if (err) {
        throw err;
    } else {
        res.redirect("back");
    }});
    }

// Edit