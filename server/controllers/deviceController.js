class DeviceController {
    async create(req, res) {

    }

    async getAll(req, res) {

    }

    async getOne(req, res) {
        const query = req.query;
        res.json(query)
    }
}

module.exports = new DeviceController()