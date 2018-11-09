const express = require('express');
const router = express.Router({ mergeParams: true });

router.get('/', (req, res) => {

    res.sendStatus(403);
});

router.post('*', (req, res) => {

    const { sessionId, text, serviceCode, phoneNumber } = req.body;

    let response = '';

    switch(text) {

        case '': {

            response = `CON Welcome to password saverX, what would you like to do
            1. Create an account.
            2. Save a new password.
            3. Retreieve password.
            4. Exit passwoard saverX
            `

            res.send(response);
        }

        case '4': {

            res.send('END Thanks for visiting, drop by later');
        }
    }

    //res.send('END Thank you for reaching my service');
});

module.exports = router;