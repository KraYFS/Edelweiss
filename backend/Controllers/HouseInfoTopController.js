import HouseInfoTop from "../Schemas/HouseInfoTop.js"

class HouseInfoTopController {
    async create(req, res) {
        try {
            const { squareMeter, square, foundationType, floors, bedrooms, type, bathrooms, reservePower, description, pictures, name, views } = req.body
            const houseInfotop = await HouseInfoTop.create({ squareMeter, square, foundationType, floors, bedrooms, type, bathrooms, reservePower, description, pictures, name, views })
            res.json(houseInfotop)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getAll(req, res) {
        try {
            const houseInfos = await HouseInfoTop.find()
            return res.json(houseInfos)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            const { id } = req.params
            if (!id) {
                res.status(400).json({ message: 'Id не указан' })
            }
            const houseInfos = await HouseInfoTop.findById(id)
            return res.json(houseInfos)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async update(req, res) {
        try {
            const houseInfotop = req.body
            if (!houseInfotop._id) {
                res.status(400).json({ message: 'HouseInfoTop не указан' })
            }
            const updatedHouseInfo = await HouseInfoTop.findByIdAndUpdate(houseInfotop._id, houseInfotop, { new: true })
            return res.json(updatedHouseInfo)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async patch(req, res) {
        try {
            const { id } = req.params
            const houseInfotop = req.body
            if (!id) {
                res.status(400).json({ message: 'HouseInfoTop не указан' })
            }
            const updatedHouseInfo = await HouseInfoTop.findByIdAndUpdate(id, houseInfotop, { new: true })
            return res.json(updatedHouseInfo)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params
            if (!id) {
                res.status(400).json({ message: 'Id не указан' })
            }
            const post = await HouseInfoTop.findByIdAndDelete(id)
            return res.json(houseInfotop)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new HouseInfoTopController()