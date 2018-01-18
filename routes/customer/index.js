let express = require('express');

let router = express.Router( {mergeParams :  true} );

let GET = require('./GET');
let POST = require('./POST');
let PUT  = require('./PUT');
let DELETE  = require('./DELETE');

	router

	.get('/', GET.get_customer)

    .post('/', POST.add_customer)
    
	.put('/:c_id', PUT.update_customer)

	.delete('/:c_id', DELETE.delete_customer);

module.exports = router;