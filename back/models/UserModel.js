import { Sequelize, DataTypes, Model } from "sequelize/types"

const sequelize = new Sequelize('sqlite::memory:');

class UserModel extends Model {
  getUserId(){ return this.USER_ID }

  getFirstname(){ return this.FIRSTNAME }
  setFirstname(firstname){ this.FIRSTNAME = firstname }

  getLastname(){ return this.LASTNAME }
  setLastname(lastname){ this.LASTNAME = lastname }

  getEmail(){ return this.EMAIL }
  setEmail(email){ this.EMAIL = email }

  getPassword(){ return this.PASSWORD }
  setPassword(password){ this.PASSWORD = password }

  getAvatar(){ return this.AVATAR }
  setAvatar(avatar){ this.AVATAR = avatar }
}

UserModel.init({
  USER_ID: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  FIRSTNAME: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  LASTNAME: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  EMAIL: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  PASSWORD: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  AVATAR: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  sequelize,
  timestamps: false,
  tableName: 'User',
  modelName: 'User',
})

/**
 * Model User
 *
 * Avatar
 * Lastname
 * Firstname
 * Email
 * Password
 * Language
 */