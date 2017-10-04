var express = require('express');
var requestHandler = require('./requestHandlers');

var router = express.Router();

router.post('/handlelogin', requestHandler.login);

router.post('/handlesignup', requestHandler.signup);

router.get('/handlematch', requestHandler.getMatches);

module.exports = router;