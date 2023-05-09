const Todo = require('./Todo');
const User = require('./User');

User.hasMany(Todo, {
  foreignKey: 'userId',
  // if we delete user, delete all their todos as well
  onDelete: 'CASCADE',
});

Todo.belongsTo(User, {
  foreignKey: 'userId',
});


module.exports = {
  Todo,
  User,
};