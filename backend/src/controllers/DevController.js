const api = require('../services/api')
const Dev = require('../models/Dev')

module.exports = {
    async store(req, res) {
        const { username: user } = req.body
        const userExists = await Dev.findOne({ user })
        if (userExists) {
            return res.json(userExists)
        }
        const response = await api.get(`/users/${user}`)

        const { name, bio, avatar_url: avatar } = response.data
        const dev = await Dev.create({
            name,
            user,
            bio,
            avatar
        })

        return res.json(dev)
    }
} 