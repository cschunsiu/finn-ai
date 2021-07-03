const { Router } = require('express');
const router = Router();
const uuid = require('uuid');

router.get('/', function (req, res) {
    res.send(uuid.v4());
});

module.exports = router;
