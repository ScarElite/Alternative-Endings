const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

// Create User model
class User extends Model {
  // Method to run on instance data (per user) to check password
  checkPassword(loginPassword) {
    return bcrypt.compareSync(loginPassword, this.password);
  }
}

// Create the fields/columns for the User model
User.init { };