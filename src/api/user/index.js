const { Router } = require('express');
const HandyStorage = require('handy-storage');
const router = Router();

const { User } = require('../../model/user');
const storage = new HandyStorage({ beautify: true });

storage.connect('src/storage/store.json');


router.get('/', async function (req, res) {
    const user = storage.state;
    res.status(201).send(user);
});

router.post('/', async function (req, res) {
    const randomNumber = Math.floor(Math.random() * 10);

    if (randomNumber > 4) {
        res.status(500).send('Request fails for creating user.');
        return;
    }

    const newUser = new User('Johnny Depp', 'jDepp', 'mr.j@gmail.com');
    await storage.setState(newUser);

    res.status(200).send({newUser})
});

module.exports = router;
