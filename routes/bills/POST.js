
let bills = require(process.env.PWD + "/models/bills");
let customer = require(process.env.PWD + "/models/customer");

var add_bills = function(req, res, next) {
    try {
        for(var j = 0;j<100;j++){

            var array    = [], array2 = [];
            let discount    = (Math.floor(Math.random() * 30 + 10)); 
            let tax         = (Math.floor(Math.random() * 10 + 10));
            let itemData    = getItems();
         
            var length = (Math.floor(Math.random() * 10));
            
            obj = {
                "billNumber" : j+1,
                "billDate"   : new Date(),
                "discount"   : discount,
                "tax"        : tax,
                "customerId" : req.body.user._id,
                "items"      : itemData
            }
            billObj = new bills(obj);
            
            billObj.save(function(err, data){
                
            })
            if(j == 99){
                res.send("done");
            }
            
        }


        function getItems() {
            for(let i = 1;i<length;i++){
                obj2 = {
                    name     : Math.random().toString(36).substr(2, 5),
                    quantity : (Math.floor(Math.random() * 10 + 10)),
                    rate     : (Math.random()*999+1).toFixed(2)
                }
                array2.push(obj2);

                if(i==length-1) {
                    return array2
                }
            }
        }
        
    } catch (error) {
        res.send("400");
    }
}

module.exports = {
    add_bills : add_bills
}