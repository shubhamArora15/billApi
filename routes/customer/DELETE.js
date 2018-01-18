let bills = require(process.env.PWD + "/models/bills");
let customer = require(process.env.PWD + "/models/customer");

var delete_customer = function(req, res, next) {
    try {
        console.log(req.params)
        customer.remove({ _id: req.params.c_id }, function(err, customer) {
            // console.log(custome  r);
            res.send(customer);
        });
    } catch (error) {
        
    }
}

module.exports = {
    delete_customer : delete_customer
}