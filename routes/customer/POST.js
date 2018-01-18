let bills = require(process.env.PWD + "/models/bills");
let customer = require(process.env.PWD + "/models/customer");

var add_customer = function(req, res, next) {
    try {
        new_customer = new customer({
            Name     : req.body.name,
            Phone    : req.body.phone,
            Addresses: req.body.address, //(Flat,Street,State ,Pin Code)// provision for adding dynamically multi addresses
            DOB      : new Date(req.body.dob),
            Email    : req.body.email
        })

        new_customer.save(function(err, data){
            
            res.send(data);
        })
    } catch (error) {
        
    }
}

module.exports = {
    add_customer : add_customer
}