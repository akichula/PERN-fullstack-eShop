const ApiError = require('../error/ApiError')

class UserController {
    async registration(req, res) {

    }

    async login(req, res) {

    }

    async isAuth(req, res) {
        const {id} = req.query;
        if (!id) {
            next(ApiError)
        }
        res.json(id)
    }
}

module.exports = new UserController()