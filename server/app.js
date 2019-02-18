/*********************************************************************
 *
 *      Description             :      	Main App JS
 *
 *      Developer               :       Ramya
 * 
 *      Date                    :       13/02/2019
 *
 *      Version                 :       1.0
 *
 **********************************************************************/
'use strict';

var express = require('express');
const bodyParser = require("body-parser");
var constant    =   require('../server/data');

var app 			=	express();


app.use(function(req, res, next) {
    var allowHeaders = ['Accept', 'Accept-Version', 'Content-Type', 'Content-MD5', 'Content-Length',
        'Response-Time', 'Api-Version', 'Origin', 'X-Requested-With', 'Authorization'];
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", allowHeaders.join(', '));
    res.header("Access-Control-Allow-Methods", 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Accept", "application/x-www-form-urlencoded,text/html,application/json,text/plain");
    next();
});

app.use(bodyParser());

app.get('/getEmployee',function(req,res){
    var data = constant.EmployeeDetail;
    res.send(getResult(data));
});

app.get('/getSalary',function(req,res){
    var data = constant.SalaryDetail;
    res.send(getResult(data));
});

function getResult(data){
    return { status: "success", result: data};
}

app.listen(8080);
module.exports  =   app;

console.log("Server Started at port 8080.");