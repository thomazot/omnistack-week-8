const DevController = require('./controllers/DevController')
const LikeController = require('./controllers/LikeController')

module.exports = (express) => {
    const routes = express.Router()
    routes.get('/', (req, res) => {

        return res.json({ message: `Olá ${req.query.name}` })
    })

    routes.post('/devs', DevController.store)
    routes.post('/devs/:devId/likes', LikeController.store)

    return routes
}