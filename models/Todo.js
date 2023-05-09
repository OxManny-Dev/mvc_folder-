const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection.js');

class Todo extends Model {
}


Todo.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    todo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.UUID,
      references: {
        model: 'user',
        key: 'id',
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    modelName: 'todo',
    // timestamps: false,
  }
);

module.exports = Todo;