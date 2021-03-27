const models = require('../models')

module.exports = () => {
    const options = {
        force: process.env.NODE_ENV === 'test'
    }
    return models.sequelize.sync(options) // force: db 초기화 -> true -> 삭제후 다시 생성
}