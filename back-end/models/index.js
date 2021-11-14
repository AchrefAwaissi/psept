const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = require("./user.model.js")(sequelize, Sequelize);
db.post = require("./posts.js")(sequelize, Sequelize);
db.post.belongsTo(db.users, {
  allowNull: false,
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

db.users.hasMany(db.post, {
allowNull: false,
});
module.exports = db;
