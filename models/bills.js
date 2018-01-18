let mongoose = require('mongoose');

let bill_schema = new mongoose.Schema(
    {
        billNumber: Number,
        billDate  : { type: Date},
        items     : [], 
        discount  : Number, 
        tax       : Number, 
        customerId: {type : mongoose.Schema.Types.ObjectId}
    },{timestamps : true});

bill = mongoose.model('bill', bill_schema);

module.exports = bill;