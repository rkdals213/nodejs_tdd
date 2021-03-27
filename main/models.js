const Sequelize = require('sequelize')
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db.sqlite',
    logging: false // 쿼리 로그남기는 옵션
})

const User = sequelize.define('User', {
    name: {
        type: Sequelize.STRING,
        unique: true
    }
})

module.exports = {
    Sequelize,
    sequelize,
    User
}
