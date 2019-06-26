const RpcClient = require('divid-rpc')
const config    = require('./config')

module.exports = app => {
    const rpc = new RpcClient(config.config)

    app.get('/blockcount', (req, res) => {
        rpc.getBlockCount((err, response) => {
            if (err) {
                console.error(err)
            } else {
                res.json({blockcount: response.result})
            }
        })
    })
}