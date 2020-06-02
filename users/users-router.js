const router = require('express').Router();

const Users = require('./users-model.js');

router.get('/', (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

router.get('/:id', (req, res) => {
  Users.findById(req.params.id)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(error => {
      console.log(error)
      res.status(404).send({ msg: 'User not found' });
    })
});

router.delete('/:id', (req, res) => {
  Users.remove(req.params.id)
  .then(remove => {
    res.status(200).json(remove)
  })
});

module.exports = router;
