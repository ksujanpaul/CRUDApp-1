var mongoose = require('mongoose');
//Defining Schema
var retailSchema = mongoose.Schema({


    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    mob: {
<<<<<<< HEAD
        type: Number,
=======
        type: String,
>>>>>>> b6bcc206ef6516b2eb26b8c5974009518389c21d
        required: true
    },

    quantity: {
        type: String,
        required: true
    },
    item: {
		type: String,
        required: true
	},
    price: {
        type: String,
        required: true
    }
});

var stupackage = module.exports = mongoose.model('RetailCollection', retailSchema); //Binding schema

module.exports.addStudent = function(data, callback) {
    stupackage.create(data, callback);
}
module.exports.getStudentByField = function(ret, callback) {
    stupackage.find({name:ret}, callback);
}
module.exports.updateStudent = function(name, data, options, callback) {
    var query = {
        name: name
    };
    var update = {
        name: data.name,
        email: data.email,
        mob: data.mob,
	item:data.item,
        quantity: data.quantity,
        price: data.price
    }
    stupackage.findOneAndUpdate(query, update, options, callback);
}
module.exports.removeStudent = function (name, callback) {
    var query = {
        name: name
    };
    stupackage.remove(query, callback);
}
module.exports.getDetails = function(callback) {
    stupackage.find(callback);
}
