'strict mode'
var express = require('express')
var app = express()
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://sujan:Sujan@ds111420.mlab.com:11420/crud";
var bodyparser = require('body-parser');
var obj = require('./student');
mongoose.connect('mongodb://sujan:Sujan@ds111420.mlab.com:11420/crud');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    'extended': false
}));
app.use(express.static(__dirname + '/public'));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/' + 'main.html');
});
app.get('/create', function (req, res) {
    res.sendFile(__dirname + '/' + 'insert.html');
});
app.get('/update', function (req, res) {
    res.sendFile(__dirname + '/' + 'update.html');
});
app.get('/retrieve', function (req, res) {
    res.sendFile(__dirname + '/' + 'retrieve.html');
});
app.get('/delete', function (req, res) {
    res.sendFile(__dirname + '/' + 'deleteselected.html');
});


app.post('/data', function (req, res) {

    var data = {
        name :req.body.name,
        email: req.body.email,
        mob : req.body.mob,
<<<<<<< HEAD
        item:req.body.item,
=======
	item:req.body.item,
>>>>>>> b6bcc206ef6516b2eb26b8c5974009518389c21d
        quantity : req.body.quantity,
        price : req.body.price


    }
obj.addStudent(data, function(err, data) {
<<<<<<< HEAD
        if (data=true) {
=======
        if (data) {
>>>>>>> b6bcc206ef6516b2eb26b8c5974009518389c21d
           response ="Data inserted succesfully"

            res.send(response);
        } else {
           error = {
                "error": "Sorry insertion failed"
            }
            res.json(error);
            console.log(err);
        }
    });

});

app.post('/retrieve', function (req, res) {

var ret=req.body.name;

obj.getStudentByField(ret, function(err, ret) {
        if (ret) {
           response = "Data retrieved succesfully"
            res.send(ret);
        } else {
           error = {
                "error": "Sorry retrieve failed"
            }
            res.json(error);
            console.log(err);
        }
    });

});

app.post('/delete', function(req, res) {
    var name = req.body.name;
    obj.removeStudent(name, function(err, name) {
        if (name) {
            response ="retailer  Record has been deleted!"

            res.send(response);
        } else {
            error = {
                "error": "Please check entered ID"
            }
            res.json(error);
            console.log(err);
        }
    });
});
app.post('/update', function(req, res) {
    var name = req.body.name;
    var data = ({
        name: req.body.name,
        email: req.body.email,
        mob: req.body.mob,
		item:req.body.item,
        quantity: req.body.quantity,
       price: req.body.price
    });
    //Calls the function from student.js model
    obj.updateStudent(name,data, {}, function(err, student) {
        if (student) {
          response = "Retailer  Details have been updated!"
            res.send(response);
            console.log(data);
        } else {
          error = "Sorry update failed"

            res.json(error);
        }

            console.log(err);
    });
});

app.post('/entiredata', function(req, res) {
    obj.getDetails(function(err,dt) {
        console.log(dt);
        if (dt) {
           response = {
                "result": dt
            }
            res.send(dt);
        } else {
           error = {
                "error": "Sorry retrieve failed"
            }
            res.json(error);
        }
    });
});
var port = process.env.PORT || 3000;
app.listen(port,function(){

    console.log('server is listening on 3000')
});

