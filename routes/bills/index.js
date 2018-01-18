let express = require('express');

let router = express.Router( {mergeParams :  true} );

let GET = require('./GET');
let POST = require('./POST');
let PUT  = require('./PUT');

	router

	.get('/',GET.get_bills)

    .post('/', POST.add_bills)
    
	.put('/', PUT.update_bills);

module.exports = router;