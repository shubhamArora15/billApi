let bills = require(process.env.PWD + "/models/bills");
let customer = require(process.env.PWD + "/models/customer");

var get_customer = function(req, res, next) {
    try {
        // customer.find(function(err, data){
        //     console.log(data);
        //     res.send(data);
        // })
        customer.aggregate([
            {
            $lookup: {
                from: "bills",
                localField: "_id",
                foreignField: "customerId",
                as: "bill"
            }
        }

        ], function(err, data){
            console.log(err, data);
            res.send(data);
        })
    } catch (error) {
        
    }
}

module.exports = {
    get_customer : get_customer
}