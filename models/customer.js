let mongoose = require('mongoose');

let customer_schema = new mongoose.Schema(
    {
        Name     : String,
        Phone    : String,
        Addresses: [], //(Flat,Street,State ,Pin Code)// provision for adding dynamically multi addresses
        DOB      : Date,
        Email    : String
    },{timestamps : true});

customer = mongoose.model('customer', customer_schema);

module.exports = customer;