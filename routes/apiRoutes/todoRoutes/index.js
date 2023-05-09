const router = require('express').Router();
const { Todo } = require('../../../models');

router.post('/', async (req, res) => {
  try {

    const dbTodoData = await Todo.create({
      ...req.body,
      userId: req.session.user.id, // req.user
    });

    res.json(dbTodoData);
  } catch (error) {
    res.status(500).json({ error });
  }


});


module.exports = router;