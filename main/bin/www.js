const app = require('../index')
const syncDb = require('./sync-db')
syncDb().then(() => {
    console.log('Sync Database')
    app.listen(3000, function () {
        console.log('server is running')
    })
})