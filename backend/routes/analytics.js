var express = require('express');
var router = express.Router();
var cors = require('cors');

const auth = require('../middleware/auth');

// Preflight OPTIONS requests

router.options('/load', cors());
router.options('/sql', cors());

// GET requests

router.get('/load', cors(), auth.userRoles());
router.get('/sql', cors());

module.exports = router;