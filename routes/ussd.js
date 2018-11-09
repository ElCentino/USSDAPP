const express = require('express');
const router = express.Router({ mergeParams: true });

router.get('/', (req, res) => {

    res.sendStatus(403);
});

router.post('*', (req, res) => {

    res.send('END Thank you for reaching my service');
});

module.exports = router;