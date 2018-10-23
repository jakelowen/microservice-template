const {json, send} = require('micro')
const {router, post, get} = require('microrouter')

module.exports = router(
    get('/', async (req, res) => {
        // const data = await json(req)
        send(res, 200, "ok")
    })
)