const express = require('express');
const router = express.Router({ mergeParams: true });

router.get('/', (req, res) => {

    res.sendStatus(403);
});

router.post('*', (req, res) => {

    console.log(req.body);
});

module.exports = router;