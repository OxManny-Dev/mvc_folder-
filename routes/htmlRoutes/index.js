const router = require('express').Router();
const {Todo, User} = require('../../models');

// /users
// /users  - render all the users
// /todos - renders all the todos
router.get('/users', async (req, res) => {
  try {
    const usersData = await User.findAll();
    const users = usersData.map(user => user.get({plain: true}));

    // req.session.save(() => {})

    res.render('users', {
      sentence: 'This is a sentence',
      users,
      visitCount: req.session.visitCount || 0,
      loggedInUser: req.session.user || null,
    });


  } catch (error) {
    res.status(500).json({error});
  }
});

router.get('/users/:userId', async (req, res) => {
  try {
    const {userId} = req.params;
    const userData = await User.findByPk(userId, {
      include: [
        {
          model: Todo,
          attributes: ['id', 'todo',],
        }
      ]
    });

    /*
    *  {
    *   id: 'mumbo jumbo',
    *   username: 'hello',
    *   todos: [
    *   ...allTheUsersTodos
    * ]
    *  }
    *
    *
    * */

    const user = userData.get({plain: true});


    const settings = {
      isCool: true,
      isHungry: false,
    };
    res.render('user_profile', {
      user,
      settings,
    });
  } catch (error) {
    res.status(500).json({error});
  }
});


module.exports = router;