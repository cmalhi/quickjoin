var express = require('express');
var requestHandler = require('./requestHandlers');

var router = express.Router();

//we dont need to get games like this anymore 
router.post('/games', requestHandler.postGames);

router.post('/login', requestHandler.login);

router.post('/signup', requestHandler.signup);

router.get('/match', requestHandler.getMatches)

module.exports = router;