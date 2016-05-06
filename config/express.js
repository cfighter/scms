var express = require('express');
var bodyParser = require('body-parser')
module.exports = function() {
    console.log("init express");
    var app = express();

    app.use(bodyParser.json());
    app.use(express.static('../public'));
    require('../app/routers/news.server.routes')(app);
    app.use(function(req, res, next) {
        res.status(404);
        try {
            return res.json("Not found")
        } catch (e) {
            console.log('404 not found')
        }
    });
    app.use(function(err,req, res, next) {
    	if(!err){
    		return next();
    	}
        res.status(500);
        try {
	        return res.json(err.message||"server error")
        } catch (e) {
            console.log('500 set header after sent')
        }
    });
    
    return app;
}
