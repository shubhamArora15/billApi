let bills = require(process.env.PWD + "/models/bills");
let customer = require(process.env.PWD + "/models/customer");

var update_customer = function(req, res, next) {
    try {
        console.log(req.body);
        var obj = {$set:{
            Name     : req.body.obj.name,
            Phone    : req.body.obj.phone,
            Addresses: req.body.obj.address, //(Flat,Street,State ,Pin Code)// provision for adding dynamically multi addresses
            DOB      : new Date(req.body.obj.dob),
            Email    : req.body.obj.email
        }}
        customer.findOneAndUpdate({ _id: req.params.c_id }, obj, { upsert: true, new: true }, function(err, customer) {
            console.log(customer, err);
            res.send(customer)
        });
    } catch (error) {
        
    }
}

module.exports = {
    update_customer : update_customer
}